import './App.css'

const App: React.FC = () => {
	return (
		<>
			<main>
				<h1 className="heading-5">This is a basic React app</h1>

				<p className="body-4">
					It's for quickly creating a Typescript based react app with settings that I like.
				</p>

				<p className="body-4">
					It doesn't do anything fancy, it's just an easy setup for getting started with styles and
					some tools like eslint and prettier.
				</p>

				<p className="body-4">
					And as an added bonus you can easily deploy it to Github Pages by manually running the{' '}
					<strong>Deploy Project</strong> workflow.
				</p>
			</main>

			<footer>
				<p className="body-1">
					Made with{' '}
					<a className="link-1" href="https://github.com/joshdales/react-starter">
						joshdales/react-starter
					</a>{' '}
					template
				</p>
			</footer>
		</>
	)
}

export default App
