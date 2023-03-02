declare global {
    interface Console {
        /**
         * Writes `data` bytes from `data` to the underlying data stream.
         */
        write(data : Uint8Array) : Promise<void>;
    }
}

console.write = async function(data : Uint8Array) {
    await Deno.stdout.write(data);
};
