import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return <div className={cn("mt-4", className)}></div>;
};
