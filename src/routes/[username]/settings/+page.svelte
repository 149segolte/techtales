<script>
    import { Separator } from "$lib/components/ui/separator";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Avatar from '$lib/components/ui/avatar';
</script>

<div>
    <div class="space-y-1">
      <h4 class="text-3xl font-medium leading-none mt-10 ">Personal Account</h4>
    </div>
    <Separator class="my-4" />
    <div class="flex h-5 items-center space-x-4 text-lg">
      <button>General</button>
      <Separator orientation="vertical" />
      <button>Security</button>
      <Separator orientation="vertical" />
      <button>Notifications</button>
      <Separator orientation="vertical" />
      <button>Sharing</button>
    </div>
  </div>

  <div class="p-4">

    <div class="flex items-center mb-4">
      <div class="flex-1 mr-4">
        <p class="text-2xl">Photo</p>
      </div>
      <div>
        <button class="mb-2 px-4 py-2 bg-neutral-400 text-white rounded">Edit</button>
      </div>
    </div>
    </div>
  
    <div class="p-4">

      <div class="flex items-center mb-4">
        <div class="flex-1 mr-4">
          <p class="text-xl">Name</p>
        </div>
        <div class="flex items-center">
          <p class="mr-2">User's Name</p> 
          <button class="px-4 py-2 bg-neutral-400 text-white rounded">Edit</button>
        </div>
      </div>
    
      <div class="flex items-center">
        <div class="flex-1 mr-4">
          <p class="text-xl">Personal Email</p>
        </div>
        <div class="flex items-center">
          <p class="mr-2">user@example.com</p> 
          <button class="px-4 py-2 bg-neutral-400 text-white rounded">Edit</button>
        </div>
      </div>
    
    </div>