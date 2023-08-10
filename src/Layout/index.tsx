import {FunctionComponent} from "react";

import {Header} from "@/Layout/Header";
import { Sidebar } from './Sidebar/Sidebar'
import {Footer} from "@/Layout/Footer";

import { LayoutProps } from './Layout.props'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			 <Header />

			<div>
				<Sidebar />
				<div>{children}</div>
			</div>

			 <Footer />
		</>
	)
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent (props: T): JSX.Element {
		console.log(props)
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
