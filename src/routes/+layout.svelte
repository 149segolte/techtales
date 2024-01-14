<script lang="ts">
	import '../app.postcss';
	import { Frame, User, Settings, LogOut } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<div class="min-h-screen m-0 p-0 bg-neutral-100 overflow-auto">
	<div class="container">
		<nav class="my-6 bg-white p-2 rounded-lg shadow">
			<div class="flex justify-between items-center">
				<div class="mx-1 flex space-x-4">
					<Frame class="w-8 h-8" />
					<h1 class="text-2xl font-bold">TechTales</h1>
				</div>
				<div class="flex space-x-4">
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
