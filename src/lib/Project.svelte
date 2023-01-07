<div itemscope itemtype="https://schema.org/SoftwareApplication"
     class="space-y-4 border-blue-500/20 border-2 rounded-md p-4">
  <header>
    <h2 itemprop="name" class="font-bold text-2xl">{project.name}</h2>
    <ul class="flex space-x-1">
      {#each project.links as link}
        <li class="span"><a rel="noreferrer" itemprop="url" class="text-blue-500 font-bold" target="_blank"
                            href="{link.url}">{link.name}</a></li>
      {/each}
    </ul>
  </header>
  <p itemprop="abstract">{project.description}</p>
  <div class="flex space-x-2">
    {#each project.tags as tag}
      <div class="text-sm bg-blue-500/20 px-1 p-0.5 rounded-md">{tag}</div>
    {/each}
  </div>
</div>

<script lang="ts">
  import type { ProjectType } from "../routes/projects/projects";

  export let project: ProjectType;
</script>

<style>
    .span::before {
        content: '• ';
    }

    .span:first-child::before {
        content: '';
    }
</style>
