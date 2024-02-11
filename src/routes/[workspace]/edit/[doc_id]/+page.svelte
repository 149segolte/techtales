<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Star, Bookmark, Share2 } from 'lucide-svelte';
</script>

<div class="flex w-full justify-center gap-6">
	<div class="hidden md:block">
		<div class="flex flex-col items-center gap-4 bg-white p-3 rounded-md shadow">
			<Bookmark class="w-6 h-6 hover:drop-shadow-lg" />
			<Star class="w-6 h-6 hover:drop-shadow-lg" />
			<Share2 class="w-6 h-6 hover:drop-shadow-lg" />
		</div>
	</div>
	<div class="w-full md:w-8/12 lg:w-7/12 bg-white p-6 rounded-md shadow">
		<form>
			<Input
				class="mb-6 border-none text-3xl font-bold"
				value="Your Blog's Title"
				placeholder="Enter your blog title"
			/>
			<div class="w-full h-64 mb-4">
				<Button class="relative w-full h-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700">
					<span class="text-sm">Upload Cover Image</span>
					<input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
				</Button>
			</div>
			<div class="">
				<Textarea
					class="h-[36rem] mb-4 border-none text-lg"
					placeholder="Type or paste (Ctrl + V) your content here or upload a markdown file."
				/>
				<div class="flex space-x-2 mt-4">
					<Button class="bg-blue-500 hover:bg-blue-600 text-white">Publish</Button>
					<Button variant="outline">Save Draft</Button>
				</div>
			</div>
		</form>
	</div>
	<div class="hidden md:block">
		<div class="grid grid-cols-1 gap-6">
			<div class="max-w-md bg-white p-6 rounded-md shadow">
				<label class="block text-sm font-medium text-neutral-700 mb-2" for="tags"> Tags </label>
				<div class="flex flex-wrap gap-2 mb-4">
					<Badge variant="secondary">Technology</Badge>
					<Badge variant="secondary">Design</Badge>
					<Badge variant="secondary">Travel</Badge>
				</div>
				<Input class="mb-2" id="tags" placeholder="Enter a tag" />
			</div>
			<div class="max-w-md bg-white rounded-md shadow">
				<Button class="w-full" variant="outline">+ Add</Button>
			</div>
		</div>
	</div>
</div>
