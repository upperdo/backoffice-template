import type { SvelteComponent } from "svelte";

export interface CommonProperties {
    $id: string;
    $createdAt: Date;
    $updatedAt: Date;
}

export interface ComponentProps {
    key: string;
    value: string;
}
export interface AccountMenuItem {
    title: string;
    description: string;
    href: string;
    Component: ConstructorOfATypedSvelteComponent
}

export interface StatusParam {
    color: string;
    label: string;
}