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
	const openDrawer = () => drawerStore.open();
</script>

<div>
	<div class="rounded-xl border-2 border-surface-700 shadow-lg backdrop-blur-xl lg:mx-24 p-2 px-4">
		<!-- Full navbar when large or stow away in the side -->
		<div class="lg:flex items-center justify-between hidden">
			<a href="/">
				<h4 class="h4">{projectName}</h4>
			</a>
			<nav>
				<ul class="flex flex-row justify-around gap-20 -translate-x-1/4">
					<li><h5>Projects</h5></li>
					<li><a href="/blog"><h5>Blog</h5></a></li>
					<li><h5>About Me</h5></li>
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
