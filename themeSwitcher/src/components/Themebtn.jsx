import useTheme from "../context/theme";

export default function Themebtn() {
    const {themeMode,darkTheme,lightTheme} = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) {
            darkTheme();
        }else {
            lightTheme();
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"    // it only makes the checkbox readonly and it sits invisbley up
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />

            <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
            </div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                {themeMode}
            </span>
        </label>
    )
}