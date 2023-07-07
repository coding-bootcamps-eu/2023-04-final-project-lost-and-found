<template>
	<div>
		<header>
			<h1>Header</h1>
		</header>
		<main>
			<h2>Main Content</h2>
			<p>Some text here...</p>
		</main>
		<footer>
			<p>Footer content</p>
		</footer>
		<h1>H1 Heading</h1>
		<h2>H2 Heading</h2>
		<h3>H3 Heading</h3>
		<button>Button</button>
		<input
			type="text"
			placeholder="Text input"
		/>
		<input
			type="email"
			placeholder="Email input"
		/>
		<select>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
		<ul>
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "DefaultComponent",
	};
</script>

<style scoped>
	header {
		background-color: #f2f2f2;
		padding: 20px;
	}

	main {
		padding: 20px;
	}

	footer {
		background-color: #f2f2f2;
		padding: 20px;
	}

	h1 {
		color: #333;
	}

	h2 {
		color: #555;
	}

	h3 {
		color: #777;
	}

	button {
		background-color: #4caf50;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
	}

	input,
	select {
		margin: 10px 0;
		padding: 10px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-bottom: 10px;
	}
</style>
