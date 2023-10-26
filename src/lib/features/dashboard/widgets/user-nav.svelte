<script lang="ts">
    // Core
    // Stores
    import { AccountStore } from "$lib/stores";
    import { AvatarService } from "$lib/services";

    // Components
	import * as DropdownMenu from "$lib/ui/components/dropdown-menu";
	import * as Avatar from "$lib/ui/components/avatar";
	import { Button } from "$lib/ui/components/button";
</script>

<DropdownMenu.Root positioning={{ placement: "bottom-end" }}>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			variant="ghost"
			builders={[builder]}
			class="relative h-8 w-8 rounded-full"
		>
			<Avatar.Root class="h-8 w-8">
				<Avatar.Image src={AvatarService.getUserInitials().href} alt={$AccountStore?.email} />
				<Avatar.Fallback>{'AV'}</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">{$AccountStore?.name}</p>
				<p class="text-xs leading-none text-muted-foreground">
					{$AccountStore?.email}
				</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<a href="/settings/profile">
					Profile
				</a>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<a href="/settings/account">Account</a>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<a href="/settings/security">Security</a>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<form action="/logout" method="POST" class="w-full">
			<DropdownMenu.Item>
				<button type="submit" class="w-full flex items-start">
					Log out
				</button>
			</DropdownMenu.Item>
		</form>
	</DropdownMenu.Content>
</DropdownMenu.Root>