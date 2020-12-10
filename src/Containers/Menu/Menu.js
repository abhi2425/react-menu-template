import React, { Component } from "react";
import "./Menu.css";
import data from "./data";
import MenuGrid from "../../Components/MenuGrid/MenuGrid";
import MenuItem from "../../Components/MenuItem/MenuItem";
import NavButtons from "../../Components/NavButtons/NavButtons";

class Menu extends Component {
    state = {
        menuItems: data,
    };
    menuHandler = (category) => {
        const updatedMenu = []
        const menuItems = this.state.menuItems;
        menuItems.map(item => {
            if (item.category === category) {
                updatedMenu.push(item)
                return
            }
        })
        this.setState({
            menuItems: updatedMenu
        })
        // this.setState(({ menuItems }) => {
        //     menuItems.map(item => {
        //         console.log(item)
        //         if (item.category === category) {
        //             updatedMenu.push(item)
        //             return
        //         }
        //     })
        //     console.log(updatedMenu)
        //     return { menuItems: updatedMenu }
        // })
    }
    render() {
        const menuItems = this.state.menuItems;
        let individualCategory = [];

        const menuItem = menuItems.map((menuItem, menuItemIndex) => {
            if (!individualCategory.length) {
                individualCategory.push(menuItem.category);
            }
            for (let j = 0; j < individualCategory.length; j++) {
                if (individualCategory[j] === menuItem.category) {
                    break;
                } else if (j === individualCategory.length - 1) {
                    individualCategory.push(menuItem.category);
                } else continue;
            }
            return (
                <MenuItem
                    image={menuItem.image}
                    name={menuItem.name}
                    price={menuItem.price}
                    details={menuItem.details}
                    key={menuItemIndex}
                />
            );
        });
        const navButtons = individualCategory.map((category) => {
            return <NavButtons category={category}
                key={category}
                clicked={() => this.menuHandler(category)} />;
        });
        return (
            <main className="menu">
                <header className="ourMenu">
                    <h1> Our Menu</h1>
                    <div className="underline"></div>
                </header>

                <nav className="navigation">
                    <button className="navButton" onClick={() => this.setState({ menuItems: data })}>All</button>
                    {navButtons}
                </nav>

                <MenuGrid>{menuItem}</MenuGrid>
            </main>
        );
    }
}
export default Menu;
