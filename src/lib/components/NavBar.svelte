<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';

	interface Props {
		projectName?: string;
	}

	let { projectName = "" }: Props = $props();
</script>

<div>
	<div
		class="flex items-center justify-between rounded-xl border-2 border-surface-700 shadow-lg backdrop-blur-xl lg:mx-24 p-2"
	>
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
</div>
