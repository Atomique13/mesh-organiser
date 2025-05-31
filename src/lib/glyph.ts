import type { IconProps } from "@lucide/svelte";
import type { Component } from "svelte";
import type { ModelFlags } from "$lib/model";

import PrinterCheck from "@lucide/svelte/icons/printer-check";
import Star from "@lucide/svelte/icons/star";
import type { ClassValue } from "svelte/elements";

export type Glyph = Component<IconProps, {}, "">;

export interface GlyphObject 
{
    glyph: Glyph;
    badgeClasses?: ClassValue;
    glyphClasses?: ClassValue;
}

export function flagsToGlyphObjects(flags: ModelFlags): GlyphObject[]
{
    const glyphs : GlyphObject[] = [];

    if (flags.printed) {
        glyphs.push({ glyph: PrinterCheck });
    }
    
    if (flags.favorite) {
        glyphs.push({ glyph: Star });
    }

    return glyphs;
}