import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

const SearchPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("font-bold mb-4", className)}>
            <h2>Search page</h2>
        </div>
    );
};

export default SearchPage;
