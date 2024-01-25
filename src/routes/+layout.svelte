<script lang="ts">
	import '../app.postcss';
	import { Frame, User, Settings, LogOut, Sun, Moon } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { PageData } from './$types';
	import { ModeWatcher, setMode, resetMode } from 'mode-watcher';

	export let data: PageData;
	let workspace = data.workspace ? data.workspace : null;
</script>

<ModeWatcher />
<div class="min-h-screen m-0 p-0 bg-neutral-100 overflow-auto">
	<div class="container">
		<nav class="my-6 bg-white p-2 rounded-lg shadow">
			<div class="flex items-center">
				<a href="/">
					<div class="mx-1 flex space-x-4">
						<Frame class="w-8 h-8" />
						<h1 class="text-2xl font-bold">TechTales</h1>
					</div>
				</a>
				{#if workspace}
					<Button href={`/${workspace}`} variant="outline" class="ml-4">@{workspace}</Button>
				{/if}
				<div class="ml-auto flex space-x-4">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button builders={[builder]} variant="outline" size="icon">
								<Sun
									class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
								/>
								<Moon
									class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
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
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Avatar.Root class="hover:cursor-pointer hover:drop-shadow">
								<Avatar.Image src="" alt="User" />
								<Avatar.Fallback>U</Avatar.Fallback>
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
								<DropdownMenu.Item>
									<LogOut class="mr-2 h-4 w-4" />
									<span>Sign out</span>
								</DropdownMenu.Item>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
		</nav>
		<slot />
	</div>
</div>
