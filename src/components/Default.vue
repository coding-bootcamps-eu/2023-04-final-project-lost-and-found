<!-- eslint-disable prettier/prettier -->

<template>
	<div>
		<header>
			<h1>{{ HeaderText() }}</h1>
		</header>
		<main>
			<h2>{{ MainHeaderText() }}</h2>
			<p>{{ MainText() }}</p>
		</main>
		<footer>
			<p>{{ FooterText() }}</p>
		</footer>
		<h1>{{ Heading1Text() }}</h1>
		<h2>{{ Heading2Text() }}</h2>
		<h3>{{ Heading3Text() }}</h3>
		<button>{{ ButtonText() }}</button>
		<input
			type="text"
			:placeholder="TextInputPlaceholder('Text')"
		/>
		// eslint-disable-next-line prettier/prettier
		<input
			type="email"
			:placeholder="TextInputPlaceholder('Email')"
		/>
		<select>
			<option
				v-for="option in options"
				:value="option.value"
				:key="option.value"
			>
				{{ option.label }}
			</option>
		</select>
		<ul>
			<li
				v-for="item in listItems"
				:key="item"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<!-- eslint-disable prettier/prettier -->
<script>
	export default {
		name: "DefaultComponent",
		data() {
			return {
				options: [
					{ value: "option1", label: "Option 1" },
					{ value: "option2", label: "Option 2" },
					{ value: "option3", label: "Option 3" },
				],
				listItems: ["List item 1", "List item 2", "List item 3"],
			};
		},
		methods: {
			HeaderText() {
				// Rückgabe des gewünschten Header-Textes
				return "Header";
			},
			MainHeaderText() {
				// Rückgabe des gewünschten Main Header-Textes
				return "Main Content";
			},
			MainText() {
				// Rückgabe des gewünschten Haupttextes
				return "Some text here...";
			},
			FooterText() {
				// Rückgabe des gewünschten Footer-Textes
				return "Footer content";
			},
			Heading1Text() {
				// Rückgabe des gewünschten Textes für H1
				return "H1 Heading";
			},
			Heading2Text() {
				// Rückgabe des gewünschten Textes für H2
				return "H2 Heading";
			},
			Heading3Text() {
				// Rückgabe des gewünschten Textes für H3
				return "H3 Heading";
			},
			ButtonText() {
				// Rückgabe des gewünschten Button-Textes
				return "Button";
			},
			TextInputPlaceholder(type) {
				// Rückgabe des gewünschten Platzhalters für das Texteingabefeld basierend auf dem Typ
				return `${type} input`;
			},
		},
	};
</script>

<!-- eslint-disable prettier/prettier -->
<style>
	/* SCOPED ? */
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
