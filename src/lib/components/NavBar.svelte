<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from "@skeletonlabs/skeleton";
	import { Bars3 } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	interface Props {
		projectName?: string;
	}
	let { projectName = "" }: Props = $props();
	
	const drawerStore = getDrawerStore();
	const openDrawer = () => drawerStore.open({ position: "right", id: "mobileNav" });

	const items: {text: string, link: string}[] = [
		{text: "Work", link: "/work"},
		{text: "Blog", link: "/blog"},
		{text: "About Me", link: "/about"},
	]
</script>

<div>
	<div class="rounded-xl border-2 border-surface-700 shadow-lg backdrop-blur-xl lg:mx-24 p-2 px-4">
		<!-- Full navbar when large or stow away in the side -->
		<div class="lg:flex items-center justify-between hidden">
			<a class="duration-300 transition-all rounded-lg hover:bg-primary-600/20 p-1" href="/">
				<h4 class="h4">{projectName}</h4>
			</a>
			<nav>
				<ul class="flex flex-row justify-around gap-20 -translate-x-1/4 items-center">
					{#each items as {text, link}}
						<li class="duration-300 transition-all m-0.5 rounded-md hover:bg-secondary-600/20 p-1"><a href={link}><h5>{text}</h5></a></li>
					{/each}
				</ul>
			</nav>
			<LightSwitch />
		</div>
		<!-- Hamburger when small -->
		 <div class="lg:hidden flex items-center justify-between">
			<a href="/">
				<h4 class="h4">{projectName}</h4>
			</a>
			<button type="button" class="btn-icon" onclick={openDrawer}>
				<Icon src={Bars3}/>
			</button>
		 </div>
	</div>
</div>
