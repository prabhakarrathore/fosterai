import { Grid, Skeleton } from "@mui/material";
import clsx from "clsx";
import React from "react";
import * as hi2Icons from "react-icons/hi2";

type IconProps = {
    iconName?: string,
    size?: number
}

export default function IconElement({ iconName = 'HiOutlineHome', size = 30 }: IconProps) {
    const IconComponent = (hi2Icons as any)[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
}

export function isWeekend(date: any) {
    const day = date.day();
    return day === 0 || day === 6;
};

export function toCapitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const generateCardSkeletons = (amount: number, large: boolean = false) => {
    const skeletons: JSX.Element[] = [];
    let i: number = 0;

    while (i < amount) {
        skeletons.push(
            <Grid item key={i} xs={12} md={4} lg={4}>
                <Skeleton data-test-id="item-skeleton" key={i} className={clsx('item-skeleton', {"item-skeleton-large": large})} />
            </Grid>
        );
        i++;
    }
    return (
        <React.Fragment>
            {skeletons}
        </React.Fragment>
    );
};