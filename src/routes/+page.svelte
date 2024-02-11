<script>
	import { page } from '$app/stores';
	import { Expand } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex flex-col gap-16">
	<div class="mx-32 mt-8 grid gap-2 grid-cols-1 md:grid-cols-2">
		<div class="flex flex-col gap-4 leading-loose my-8">
			<h1 class="max-w-xl text-5xl font-bold">Discover, Share, &amp; Inspire, TechTales.</h1>
			<h3 class="text-2xl font-semibold">Make your community.</h3>
			<div class="flex gap-2">
				<Button href="icons/">Start your Journey</Button>
				<Button variant="secondary" class="bg-card" href="guide/">Find others</Button>
				<Button variant="secondary" class="bg-card" href="https://github.com/lucide-icons/lucide"
					>Contribute</Button
				>
			</div>
		</div>
		<div class="h-64 bg-zinc-700 rounded-lg overflow-clip">
			<img
				src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmludGFnZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D"
				alt="Placeholder"
				class="w-full object-fill rounded-xl shadow border"
			/>
		</div>
	</div>
	<div class="grid gap-4 grid-cols-1 md:grid-cols-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<Expand class="bg-primary-foreground text-primary rounded-md h-10 w-10 p-2 mb-2" />
					<span>Lightweight &amp; Scalable</span>
				</Card.Title>
				<Card.Description>
					Icons are lightweight, highly optimized scalable vector graphics (SVG).
				</Card.Description>
			</Card.Header>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<Expand class="bg-primary-foreground text-primary rounded-md h-10 w-10 p-2 mb-2" />
					<span>Lightweight &amp; Scalable</span>
				</Card.Title>
				<Card.Description>
					Icons are lightweight, highly optimized scalable vector graphics (SVG).
				</Card.Description>
			</Card.Header>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<Expand class="bg-primary-foreground text-primary rounded-md h-10 w-10 p-2 mb-2" />
					<span>Lightweight &amp; Scalable</span>
				</Card.Title>
				<Card.Description>
					Icons are lightweight, highly optimized scalable vector graphics (SVG).
				</Card.Description>
			</Card.Header>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<Expand class="bg-primary-foreground text-primary rounded-md h-10 w-10 p-2 mb-2" />
					<span>Lightweight &amp; Scalable</span>
				</Card.Title>
				<Card.Description>
					Icons are lightweight, highly optimized scalable vector graphics (SVG).
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</div>
	<div>
		<div class="text-center text-xl mb-4">Intergrates with...</div>
		<div class="grid gap-4 grid-cols-8">
			<a href="https://fly.io/" class="aspect-[149/40]">
				<img alt="Fly.io" src="/icons/FlyIo.svg" class="w-full h-full" />
			</a>
			<a href="https://vercel.com" class="aspect-[149/40]">
				<img alt="Vercel" src="/icons/Vercel.svg" class="w-full h-full" />
			</a>
			<a href="https://aws.amazon.com" class="aspect-[149/40]">
				<img alt="Amazon Web Services" src="/icons/Aws.svg" class="w-full h-full" />
			</a>
			<a href="https://cloudflare.com" class="aspect-[149/40]">
				<img alt="Cloudflare" src="/icons/CloudFlare.svg" class="w-full h-full" />
			</a>
			<a href="https://DigitalOcean.com" class="aspect-[149/40]">
				<img alt="Digital Ocean" src="/icons/DigitalOcean.svg" class="w-full h-full" />
			</a>
			<a href="https://Deno.com/deploy/" class="aspect-[149/40]">
				<img alt="Deno Deploy" src="/icons/DenoDeploy.svg" class="w-full h-full" />
			</a>
			<a href="https://Netlify.com" class="aspect-[149/40]">
				<img alt="Netlify" src="/icons/Netlify.svg" class="w-full h-full" />
			</a>
			<a href="https://Koyeb.com" class="aspect-[149/40]">
				<img alt="Koyeb" src="/icons/Koyeb.svg" class="w-full h-full" />
			</a>
		</div>
	</div>

	<Card.Root class="p-16">
		<Card.Header>
			<Card.Title class="text-6xl font-bold">
				<span>Why TechTales?</span>
			</Card.Title>
		</Card.Header>
		<Card.Content class="grid grid-cols-2 gap-6">
			<div>
				<span class="text-2xl font-semibold">Meet Iku, the Turso</span>
				<p>
					Iku-Turso is a mythological Finnish sea creature that is an elemental force of nature.
					When we created Turso this seemed the ideal “spirit animal” for what we were building, and
					we named our mascot Iku.
				</p>
			</div>
			<div>
				<span class="text-2xl font-semibold">Meet Iku, the Turso</span>
				<p>
					Iku-Turso is a mythological Finnish sea creature that is an elemental force of nature.
					When we created Turso this seemed the ideal “spirit animal” for what we were building, and
					we named our mascot Iku.
				</p>
			</div>
			<div>
				<span class="text-2xl font-semibold">Meet Iku, the Turso</span>
				<p>
					Iku-Turso is a mythological Finnish sea creature that is an elemental force of nature.
					When we created Turso this seemed the ideal “spirit animal” for what we were building, and
					we named our mascot Iku.
				</p>
			</div>
			<div>
				<span class="text-2xl font-semibold">Meet Iku, the Turso</span>
				<p>
					Iku-Turso is a mythological Finnish sea creature that is an elemental force of nature.
					When we created Turso this seemed the ideal “spirit animal” for what we were building, and
					we named our mascot Iku.
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<div class="text-5xl font-bold">Recent Trending...</div>

	<div class="grid grid-cols-4 gap-6">
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="p-0 overflow-clip rounded-xl">
				<img src="https://placehold.co/600x350" alt="Placeholder" class="w-full" />
			</Card.Header>
			<Card.Content class="py-4">
				<Card.Title class="text-2xl font-semibold">Title</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</Card.Description>
				<div class="flex justify-between mt-4">
					<span class="text-sm font-semibold">Author</span>
					<span class="text-sm font-semibold">Jan 1, 2021</span>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
