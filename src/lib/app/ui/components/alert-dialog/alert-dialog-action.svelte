<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { buttonVariants } from '$lib/app/ui/components/button';
	import { cn } from '$lib/app/utils';

	type $$Props = AlertDialogPrimitive.ActionProps;
	type $$Events = AlertDialogPrimitive.ActionEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AlertDialogPrimitive.Action
	class={cn(buttonVariants(), className)}
	{...$$restProps}
	on:click
	on:keydown
	let:builder
>
	<slot {builder} />
</AlertDialogPrimitive.Action>
