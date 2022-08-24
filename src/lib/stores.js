import { writable } from "svelte/store";

export const currentDeliveryPage = writable(0);

export const pageAnswers = writable([0, 0, 0, ""]);
