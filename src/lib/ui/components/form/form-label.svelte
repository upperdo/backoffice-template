<script lang="ts">
	import type { Label as LabelPrimitive } from "bits-ui";
	import { getFormField } from "formsnap";
	import { cn } from "$lib/common/utils/shadcn-utility";
	import { Label } from "$lib/ui/components/ui/label";

	type $$Props = LabelPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export { className as class };

	const { errors, ids } = getFormField();
</script>

<Label
	for={ids.input}
	class={cn($errors && "text-destructive", className)}
	{...$$restProps}
>
	<slot />
</Label>
