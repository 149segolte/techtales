<script>
	import '../app.postcss';
	import { Frame } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	let user = writable(null);
</script>

<div class="container">
	<nav class="flex items-center mt-4 p-3 w-full h-14 rounded-full bg-neutral-700">
		<div class="flex text-white">
			<Frame />
			<a href="/">Home</a>
		</div>
		{#if $user}
			<div class="flex ml-auto">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Avatar.Root>
							<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Group>
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Profile</DropdownMenu.Item>
							<DropdownMenu.Item>Billing</DropdownMenu.Item>
							<DropdownMenu.Item>Team</DropdownMenu.Item>
							<DropdownMenu.Item>Subscription</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		{:else}
			<div class="flex ml-auto">
				<Button variant="outline">Sign Up</Button>
				<Button>Sign In</Button>
			</div>
		{/if}
	</nav>
	<slot />
</div>
