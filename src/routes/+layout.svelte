<script lang="ts">
	import '../app.pcss';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { Frame, User, Settings, LogOut, Sun, Moon } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { PageData } from './$types';
	import { ModeWatcher, setMode, resetMode } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';

	export let data: PageData;
	let workspace = data.workspace ? data.workspace : null;
	console.log(data);
</script>

<ModeWatcher />
<div class="min-h-screen my-0 p-0 container">
	<header
		class="sticky top-6 z-50 my-6 px-4 flex h-14 items-center rounded-xl border bg-card/95 text-card-foreground shadow backdrop-blur supports-[backdrop-filter]:bg-card/60"
	>
		<div class="mr-4 flex">
			<a href="/" class="flex items-center space-x-2">
				<Frame class="h-6 w-6" />
				<span class="font-bold font-sans text-lg inline-block">TechTales</span>
			</a>
			{#if workspace}
				<nav class="hidden sm:flex items-center text-sm">
					<Button href={`/${workspace}`} variant="secondary" class="ml-4 mr-3">@{workspace}</Button>
					<Button variant="ghost" size="icon" href={`https://github.com/${workspace}`}>
						<svg
							class="h-5 w-5 fill-current"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>GitHub</title>
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
						<span class="sr-only">GitHub</span>
					</Button>
					<Button variant="ghost" size="icon" href={`https://twitter.com/${workspace}`}>
						<svg
							class="h-4 w-4 fill-current"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>X</title>
							<path
								d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
							/>
						</svg>
						<span class="sr-only">X (formerly known as Twitter)</span>
					</Button>
				</nav>
			{/if}
		</div>
		<Button class="block sm:hidden" variant="ghost" size="icon">
			<span class="sr-only">Toggle Menu</span>
		</Button>
		<nav class="ml-auto hidden sm:flex items-center">
			<DropdownMenu.Root preventScroll={false}>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" size="icon">
						<Sun class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon
							class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			{#if data.session?.user}
				<DropdownMenu.Root preventScroll={false}>
					<DropdownMenu.Trigger>
						<Avatar.Root class="h-8 w-8 ml-1 hover:cursor-pointer hover:drop-shadow">
							{#if data.session.user.image}
								<Avatar.Image src={data.session.user.image} alt={data.session.user.name} />
							{/if}
							<Avatar.Fallback>
								{data.session.user.name
									?.toUpperCase()
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</Avatar.Fallback>
						</Avatar.Root>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Group>
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>
								<User class="mr-2 h-4 w-4" />
								<span>Profile</span>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<Settings class="mr-2 h-4 w-4" />
								<span>Settings</span>
							</DropdownMenu.Item>
							<DropdownMenu.Item on:click={() => signOut()}>
								<LogOut class="mr-2 h-4 w-4" />
								<span>Sign out</span>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{:else}
				<Button on:click={() => signIn('google')} class="ml-2">Login</Button>
			{/if}
		</nav>
	</header>
	<slot class="relative" />
	<footer class="mt-16 mb-4 text-center text-sm text-card-foreground w-11/12 mx-auto">
		<Separator class="my-4 bg-background" />
		<p>
			© 2024 <a class="underline" href="https://149segolte.dev">149segolte</a>. All rights
			reserved.
		</p>
	</footer>
</div>
