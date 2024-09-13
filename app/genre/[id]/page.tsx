"use client";

import { cn } from "@/lib/utils";

import React from "react";

interface Props {
    className?: string;
}

const GenrePage: React.FC<Props> = ({ className }) => {
    return (
        <>
            <div className={cn("", className)}>Genere page</div>
        </>
    );
};

export default GenrePage;
