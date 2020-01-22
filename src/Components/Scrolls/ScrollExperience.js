import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./ScrollExperience.css";

const list = [
	{
		name: "Name",
		img:
			"https://images.unsplash.com/photo-1579033716894-a86a2486346b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		text: "very good service"
	},
	{
		name: "Name",
		img:
			"https://images.unsplash.com/photo-1579033716894-a86a2486346b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		text: "very good service"
	},
	{
		name: "Name",
		img:
			"https://images.unsplash.com/photo-1579033716894-a86a2486346b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		text: "very good service"
	},
	{
		name: "Name",
		img:
			"https://images.unsplash.com/photo-1579033716894-a86a2486346b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		text: "very good service"
	},
	{
		name: "Name",
		img:
			"https://images.unsplash.com/photo-1579033716894-a86a2486346b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		text: "very good service"
	}
];

const MenuItem = ({ text, selected, url, experi }) => {
	return (
		<div className={`menu-item-user }`} id='home-find-quickstay-user-cards'>
			<img src={url}></img>
			<div id="home-find-quickstay-user-cards-content">
				<p>{text}</p>
				<hr style={{ margin: 5 }}></hr>
				<p>{experi}</p>
			</div>
		</div>
	);
};

export const Menu = (list, selected) =>
	list.map(el => {
		const { name } = el;
		const { img } = el;
		const { text } = el;

		return (
			<MenuItem
				text={name}
				key={name}
				selected={selected}
				url={img}
				experi={text}
			/>
		);
	});

const Arrow = ({ text, className }) => {
	return (
		<div style={{ fontSize: "xx-large" }} className={className}>
			{text}
		</div>
	);
};
Arrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class ScrollExperience extends Component {
	state = {
		alignCenter: true,
		clickWhenDrag: false,
		dragging: true,
		hideArrows: true,
		hideSingleArrow: true,
		itemsCount: list.length,
		// selected: "item1",
		translate: 0,
		transition: 0.3,
		wheel: true
	};

	constructor(props) {
		super(props);
		this.menu = null;
		this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
	}

	onUpdate = ({ translate }) => {
		// console.log(`onUpdate: translate: ${translate}`);
		this.setState({ translate });
	};

	onSelect = key => {
		// console.log(`onSelect: ${key}`);
		this.setState({ selected: key });
	};

	componentDidUpdate(prevProps, prevState) {
		const { alignCenter } = prevState;
		const { alignCenter: alignCenterNew } = this.state;
		if (alignCenter !== alignCenterNew) {
			this.menu.setInitial();
		}
	}

	setItemsCount = ev => {
		const { itemsCount = list.length, selected } = this.state;
		const val = +ev.target.value;
		const itemsCountNew =
			!isNaN(val) && val <= list.length && val >= 0
				? +ev.target.value
				: list.length;
		const itemsCountChanged = itemsCount !== itemsCountNew;

		if (itemsCountChanged) {
			this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
			this.setState({
				itemsCount: itemsCountNew
			});
		}
	};

	setSelected = ev => {
		const { value } = ev.target;
		this.setState({ selected: String(value) });
	};

	render() {
		const {
			alignCenter,
			clickWhenDrag,
			hideArrows,
			dragging,
			hideSingleArrow,
			itemsCount,
			selected,
			translate,
			transition,
			wheel
		} = this.state;

		const menu = this.menuItems;

		const checkboxStyle = {
			margin: "5px 10px"
		};
		const valueStyle = {
			margin: "5px 10px",
			display: "inline-block"
		};

		return (
			<div className='App'>
				<ScrollMenu
					ref={el => (this.menu = el)}
					data={menu}
					arrowLeft={ArrowLeft}
					arrowRight={ArrowRight}
					hideArrows={hideArrows}
					hideSingleArrow={hideSingleArrow}
					transition={+transition}
					onUpdate={this.onUpdate}
					onSelect={this.onSelect}
					selected={selected}
					translate={translate}
					alignCenter={alignCenter}
					scrollToSelected={true}
					dragging={dragging}
					clickWhenDrag={clickWhenDrag}
					wheel={wheel}
				/>
			</div>
		);
	}
}

export default ScrollExperience;

// ReactDOM.render(<App />, document.getElementById("root"));
