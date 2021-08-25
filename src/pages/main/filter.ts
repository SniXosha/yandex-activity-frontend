import {useSelector} from "react-redux";
import {ALL} from "data/activities";
import {allActivities} from "data/api";

export function useFilteredActivities() {
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const money = useSelector((state: any) => state.filter.money)
    const category = useSelector((state: any) => state.filter.category)
    const binary = useSelector((state: any) => state.filter.binary)

    const tooExpensive = (activity: any) => money !== 0 && activity.money > money;
    const wrongCategory = (activity: any) => category !== ALL && activity.category !== category;
    const wrongActivityLevel = (activity: any) => activityLevel !== 0 && activity.activityLevel !== activityLevel;
    const doesNotSupportBinaryFilter = (activity: any) => {
        let badFilters = Object.entries(binary)
            .filter(value => value[1])
            .map(value => value[0])
            .filter(value => !activity.binary.includes(value))
        return badFilters.length > 0;
    };

    return allActivities().filter(activity => {
        if (tooExpensive(activity)) return false
        if (wrongCategory(activity)) return false
        if (wrongActivityLevel(activity)) return false
        if (doesNotSupportBinaryFilter(activity)) return false
        return true;
    });
}