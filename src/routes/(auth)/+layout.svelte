<script lang="ts">
</script>

<div
	class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<!-- <Button
		href="/examples/authentication"
		variant="ghost"
		class="absolute right-4 top-4 md:right-8 md:top-8">
		Login
	</Button> -->
	<div class="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style={`background-image:url(/assets/images/login_bg.avif);`}
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">
			Sveltekit Appwrite Template
		</div>
		<div class="relative z-20 mt-auto hidden">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;This library has saved me countless hours of work and helped me deliver stunning
					designs to my clients faster than ever before. Highly recommended!&rdquo;
				</p>
				<footer class="text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<slot />
		</div>
	</div>
</div>
