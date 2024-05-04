import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant='outlined'
        className="rounded-md px-3 gap-4 h-12 flex"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >

        <Avatar sx={{ width: 24, height: 24, color: "white", backgroundColor: "orange" }} src="/broken-image.jpg" />
      </Button>
      <Menu
        id="basic-menu"
        className='w-full'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className='flex  gap-5'>

            <div><ManageAccountsIcon /></div>
            <div>My Account</div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className='flex gap-5'>
            <div><LogoutIcon /></div>
            <div>Sign Out</div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
