<script>
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { Switch } from '$lib/components/ui/switch';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { buttonVariants } from '$lib/components/ui/button';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';

	let terms1 = false;
	let terms2 = false;
	let terms3 = false;
	let terms4 = false;
	let terms5 = false;
	let terms6 = false;
	let terms7 = false;
	let terms8 = false;
	let terms9 = false;
	let terms10 = false;

	let activeDiv = 'div1';

	function showDiv(divId) {
		activeDiv = divId;
	}
	let checked = false;

	let currentDate = new Date();
	let selectedFormat = 'DD/MM/YYY';

	const dateFormats = [
		{ value: 'DD/MM/YYY', label: 'DD/MM/YYY' },
		{ value: 'MM/DD/YYY', label: 'MM/DD/YYY' }
	];

	function applySelectedFormat() {
		const options = {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		};
		currentDate = currentDate
			.toLocaleString('en-GB')
			.replace(/(\d+)\/(\d+)\/(\d+)/, (match, p1, p2, p3) => {
				return `${p1}/${p2.padStart(2, '0')}/${p3.padStart(4, '0')}`;
			});
	}
	let isDivVisible = false;

	function toggleDivVisibility() {
		isDivVisible = !isDivVisible;
	}
	let isDivVisible1 = false;

	function toggleDivVisibility1() {
		isDivVisible1 = !isDivVisible1;
	}
	let isDivVisible2 = false;

	function toggleDivVisibility2() {
		isDivVisible2 = !isDivVisible2;
	}
</script>

<div class="h-screen">
	<div class="bg-white p-4 shadow rounded-lg">
		<div class="space-y-1">
			<h4 class="text-3xl leading-none mt-5 font-bold">Personal Account</h4>
		</div>
		<Separator class="my-4" />
		<div class="flex h-5 items-center space-x-4 text-lg">
			<button on:click={() => showDiv('div1')}>General</button>
			<Separator orientation="vertical" />
			<button on:click={() => showDiv('div2')}>Security</button>
			<Separator orientation="vertical" />
			<button on:click={() => showDiv('div3')}>Notifications</button>
			<Separator orientation="vertical" />
			<button>Sharing</button>
		</div>

		<div class="border-t-2 mt-3 border-gray-200"></div>
		<div
			id="div1"
			class="bg-neutral-100 border-t-3 rounded-lg {activeDiv !== 'div1' ? 'hidden' : ''}"
		>
			<div class="mt-3">
				<div class="p-4">
					<div class="flex items-center mb-4">
						<div class="flex-1 mr-4">
							<p class="text-xl">Photo</p>
						</div>
						<div>
							<Button class="mb-2 py-2">Edit</Button>
						</div>
					</div>
				</div>

				<div class="p-4">
					<div class="flex items-center mb-4">
						<div class="flex-1 mr-4">
							<p class="text-xl">Name</p>
						</div>
						<div class="flex items-center">
							<p class="mr-2 underline">User's Name</p>
							<Button class="mb-2 py-2" on:click={toggleDivVisibility1}>Edit</Button>
						</div>
					</div>
				</div>
				{#if isDivVisible1}
					<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Dialog.Root>
							<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
								Edit Profile
							</Dialog.Trigger>
							<Dialog.Content class="sm:max-w-[425px]">
								<Dialog.Header>
									<Dialog.Title>Edit Name</Dialog.Title>
									<Dialog.Description></Dialog.Description>
								</Dialog.Header>
								<div class="grid gap-4 py-4">
									<div class="grid grid-cols-4 items-center gap-4">
										<Label for="name" class="text-right">Name</Label>
										<Input id="name" value="Pedro Duarte" class="col-span-3" />
									</div>
								</div>
								<Dialog.Footer>
									<Button type="submit">Save changes</Button>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</div>
				{/if}
				<div class="p-4">
					<div class="flex items-center">
						<div class="flex-1 mr-4">
							<p class="text-xl">Personal Email</p>
						</div>
						<div class="flex items-center">
							<p class="mr-2 underline">user@example.com</p>
							<Button class="mb-2 py-2" on:click={toggleDivVisibility2}>Edit</Button>
						</div>
					</div>
				</div>
			</div>
			{#if isDivVisible2}
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Dialog.Root>
						<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
							Edit Profile
						</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>Edit Email</Dialog.Title>
								<Dialog.Description>.</Dialog.Description>
							</Dialog.Header>
							<div class="grid gap-4 py-4">
								<div class="grid grid-cols-4 items-center gap-4">
									<Label for="email" class="text-right">Email</Label>
									<Input id="email" value="pedro@example.com" class="col-span-3" />
								</div>
							</div>
							<Dialog.Footer>
								<Button type="submit">Save changes</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>
				</div>
			{/if}
			<div class="border-t-2 mt-3 border-gray-200"></div>
			<div class="mt-3">
				<div class="p-4">
					<div class="flex items-center mb-4">
						<div class="flex-1 mr-4">
							<p class="text-xl">Automatic time zone</p>
						</div>
						<div>
							<Switch id="airplane-mode" />
						</div>
					</div>
				</div>

				<div class="p-4">
					<div class="flex items-center mb-4">
						<div class="flex-1 mr-4">
							<p class="text-xl">Language</p>
						</div>
						<div class="flex items-center">
							<p class="mr-2 underline">English(United States)</p>
							<Button class="mb-2 py-2">Edit</Button>
						</div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-center">
						<div class="flex-1 mr-4">
							<p class="text-xl">Date Format</p>
						</div>
						<div class="flex items-center">
							<select
								class="rounded-sm shadow p-2 border-gray-600 bg-black text-white"
								id="dateFormat"
								bind:value={selectedFormat}
								on:change={applySelectedFormat}
							>
								{#each dateFormats as { value, label }}
									<option {value}>{label}</option>
								{/each}
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			id="div2"
			class="bg-neutral-100 border-t-3 rounded-lg {activeDiv !== 'div2' ? 'hidden' : ''}"
		>
			<div class="mt-3">
				<div class="p-4">
					<div class="flex items-center mb-4">
						<div class="flex-1 mr-4">
							<p class="text-xl">Password</p>
						</div>
						<div>
							<Button class="mb-2 py-2" on:click={toggleDivVisibility}>Change Password</Button>
						</div>
					</div>
				</div>
				{#if isDivVisible}
					<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Tabs.Root value="password" class="w-[400px]">
							<Tabs.List class="">
								<Tabs.Trigger value="password"></Tabs.Trigger>
							</Tabs.List>
							<Tabs.Content value="password">
								<Card.Root>
									<Card.Header>
										<Card.Title>Password</Card.Title>
										<Card.Description>
											Change your password here. After saving, you'll be logged out.
										</Card.Description>
									</Card.Header>
									<Card.Content class="space-y-2">
										<div class="space-y-1">
											<Label for="current">Current password</Label>
											<Input id="current" type="password" />
										</div>
										<div class="space-y-1">
											<Label for="new">New password</Label>
											<Input id="new" type="password" />
										</div>
									</Card.Content>
									<Card.Footer>
										<Button>Save password</Button>
									</Card.Footer>
								</Card.Root>
							</Tabs.Content>
						</Tabs.Root>
					</div>
				{/if}
				<div class="mt-3">
					<div class="p-4">
						<div class="flex items-center mb-4">
							<div class="flex-1 mr-4">
								<p class="text-xl">Two-step verification</p>
							</div>
							<div>
								<Switch id="airplane-mode" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			id="div3"
			class="flex-row justify-around mt-3 bg-neutral-100 border-t-3 p-4 rounded-lg {activeDiv !== 'div3'
				? 'hidden'
				: ''} w-full"
		>
			<div class="w-1/2">
				<div class="flex flex-col space-y-4">
					<h4 class="text-3xl leading-none font-mono mt-1">Alert</h4>
					<p class="text-lg">Email me when:</p>
					<div class="flex space-x-4 justify-items-center">
						<Checkbox id="terms1" bind:checked={terms1} />
						<Label
							for="terms1"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							I'm running out of space
						</Label>
					</div>
					<div class="flex space-x-4 justify-items-center">
						<Checkbox id="terms2" bind:checked={terms2} />
						<Label
							for="terms2"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							I delete a large number of files
						</Label>
					</div>
					<div class="flex space-x-4 justify-items-center">
						<Checkbox id="terms3" bind:checked={terms3} />
						<Label
							for="terms3"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							A new browser is used to sign in
						</Label>
					</div>
					<div class="flex space-x-4 justify-items-center">
						<Checkbox id="terms4" bind:checked={terms4} />
						<Label
							for="terms4"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							A new device is linked
						</Label>
					</div>
					<div class="flex space-x-4 justify-items-center">
						<Checkbox id="terms5" bind:checked={terms5} />
						<Label
							for="terms5"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							A new app is connected
						</Label>
					</div>
					<div class="border-t-2 mt-3 border-gray-200"></div>

					<div class="flex flex-col space-y-4">
						<h4 class="text-3xl font-mono leading-none mt-1">News</h4>
						<p class="text-lg">Email me about:</p>
						<div class="flex space-x-4 justify-items-center">
							<Checkbox id="terms6" bind:checked={terms6} />
							<Label
								for="terms6"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								New features and updates
							</Label>
						</div>
						<div class="flex space-x-4 justify-items-center">
							<Checkbox id="terms7" bind:checked={terms7} />
							<Label
								for="terms7"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Tips and tricks
							</Label>
						</div>
						<div class="flex space-x-4 justify-items-center">
							<Checkbox id="terms8" bind:checked={terms8} />
							<Label
								for="terms8"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								feedback requests
							</Label>
						</div>
						<div class="flex space-x-4 justify-items-center">
							<Checkbox id="terms9" bind:checked={terms9} />
							<Label
								for="terms9"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								API announcements
							</Label>
						</div>
					</div>
				</div>
				<div class="border-t-2 mt-3 border-gray-200"></div>

				<div class="w-1/2">
					<div class="flex flex-col space-y-4">
						<h4 class="text-3xl font-mono leading-none mt-5">Files</h4>
						<p class="text-lg">Email me about:</p>
						<div class="flex space-x-4 justify-items-center">
							<Checkbox id="terms10" bind:checked={terms10} />
							<Label
								for="terms10"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Activity in shared foldrers(weekly digest)
							</Label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
