import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Button, ButtonTheme} from "shared/ui/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={
            classNames(
                cls.Sidebar,
                {[cls.collapsed]: collapsed},
                [className])
        }>
            <Button
                onClick={onToggle}
                theme={ButtonTheme.PRIMARY}
                className={cls.collapseBtn}
            >{collapsed ? ">" : "<"}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*<LangSwitcher className={cls.lang} />*/}
            </div>
        </div>
    );
};
