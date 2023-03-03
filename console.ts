declare global {
    interface Console {
        /**
         * Writes `data` bytes from `data` to the underlying data stream.
         */
        write(data : Uint8Array) : Promise<void>;
    }
}

console.write = async function(data: Uint8Array | string) {

    if (data instanceof Uint8Array) {
        await Deno.stdout.write(data);
    } else

    if (typeof data === "string") {
        await Deno.stdout.write(new TextEncoder().encode(data));
    } else {
        return;
    }
};

