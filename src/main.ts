import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
  </div>
  <div>
    <h1>TypeScript + Vite homework</h1>
    <p>My first TypeScript + Vite project</p>
  </div>
</section>


<section id="next-steps">
  <div id="docs">
    <h2>Tasks</h2>
    <p> My tasks</p>
    <ul>
      <li>
        <a href="./task-1.ts">
          Task 1
        </a>
      </li>
      <li>
        <a href="./task-2.ts">
          Task 2
        </a>
      </li>
      <li>
        <a href="./task-3.ts">
          Task 3
        </a>
      </li>
      <li>
        <a href="./task-4.ts">
          Task 4
        </a>
      </li>
      <li>
        <a href="./task-5.ts">
          Task 5
        </a>
      </li>
      <li>
        <a href="./task-6.ts">
          Task 6
        </a>
      </li>
      <li>
        <a href="./task-7.ts">
          Task 7
        </a>
      </li>
      <li>
        <a href="./task-8.ts">
          Task 8
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with me</h2>
    <p>My socials</p>
    <ul>
      <li><a href="https://github.com/ccnvxii?tab=repositories" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
     
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

