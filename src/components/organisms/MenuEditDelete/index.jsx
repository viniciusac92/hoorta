import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Icon from "../../atoms/Icon";
import Link from "../../atoms/Link";
import threeDots from "../../../assets/images/icons/threeDots.svg";
import {GroupLink, Item} from "./styles";
import ModalDeleteProduct from "../../molecules/ModalDeleteProduct";
import ModalEditProduct from "../../molecules/ModalEditProduct";

const ITEM_HEIGHT = 48;

export default function MenuEditDelete({
	currentProductId,
	currentStoreId,
	productName,
	productPrice,
	productDescription,
}) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onClick={handleClick}>
				<Icon src={threeDots} alt="" display={["block", "block"]} />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "10ch",
						padding: "0px",
					},
				}}>
				<GroupLink>
					<Item type="button" onClick={handleClose}>
						<ModalEditProduct
							currentProductId={currentProductId}
							currentStoreId={currentStoreId}
							productName={productName}
							productPrice={productPrice}
							productDescription={productDescription}
						/>
					</Item>
					<Item type="button" onClick={handleClose}>
						<ModalDeleteProduct currentProductId={currentProductId} />
					</Item>
				</GroupLink>
			</Menu>
		</div>
	);
}
