<script>
	import { Separator } from '$lib/components/ui/separator';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<div class="container flex">
	<div class="w-full">
		<div class="flex w-auto">
			<h1 class="text-2xl font-semibold tracking-tight scroll-m-20">My Blogs</h1>
			<Button variant="ghost" class="ml-auto">More</Button>
		</div>
		<div class="w-auto">
			<Carousel.Root
				opts={{
					align: 'start'
				}}
				class="w-full max-w-sm"
			>
				<Carousel.Content>
					{#each Array(5) as _, i (i)}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<div class="p-1">
								<Card.Root>
									<Card.Content class="flex items-center justify-center p-6 aspect-square">
										<span class="text-3xl font-semibold">{i + 1}</span>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>
        <Separator class="my-4" />
        <div>
            
        </div>
	</div>
	<Separator orientation="vertical" />
	<div>
        <div class="m-4">
            <Avatar.Root>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
        </div>
		
        <div class="m-2">
            <Card.Root class="w-[350px]">
                <Card.Header>
                  <Card.Title>Name</Card.Title>
                  <Card.Description>Description</Card.Description>
                </Card.Header>
                <Card.Content>
                    Content
                </Card.Content>
                <Card.Footer class="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </Card.Footer>
              </Card.Root>
        </div>
	</div>
</div>
