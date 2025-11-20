import * as S from './index.styles';
import { Link } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as TransactionsIcon } from 'assets/icons/transactions.svg';
import { ReactComponent as InvoicesIcon } from 'assets/icons/invoices.svg';
import { ReactComponent as WalletIcon } from 'assets/icons/my-wallets.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "Transactions", icon: TransactionsIcon, path: "/dashboard/transactions" },
  { label: "Invoices", icon: InvoicesIcon, path: "/dashboard/invoices" },
  { label: "My Wallets", icon: WalletIcon, path: "/dashboard/wallets" },
  { label: "Settings", icon: SettingsIcon, path: "/dashboard/settings" },
];

const helpItems = [
  { label: "Help", icon: HelpIcon, path: "/" },
  { label: "Logout", icon: LogoutIcon, path: "/sign-in", isLogout: true },
];

interface LeftMenuProps {
  onClickItem?: () => void;
}

const LeftMenu = ({ onClickItem }: LeftMenuProps) => {
  const { logout } = useAuth();

  return (
    <S.LeftMenuStyled>
      <nav className="menu other">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              onClick={() => onClickItem?.()}

              className={`item ${index === 0 ? "active" : ""}`}
            >
              <Icon className="icon" /> <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <nav className="menu help-logout">
        {helpItems.map((item, index) => {
          const Icon = item.icon;

          if (item.isLogout) {
            return (
              <div
                key={index}
                className="item"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <Icon className="icon" /> <span>{item.label}</span>
              </div>
            );
          }

          return (
            <Link key={index} to={item.path} className="item" onClick={() => onClickItem?.()}>
              <Icon className="icon" /> <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </S.LeftMenuStyled>
  );
};

export default LeftMenu;
