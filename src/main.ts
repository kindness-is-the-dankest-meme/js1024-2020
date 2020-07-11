declare global {
  var a: HTMLCanvasElement;
  var b: HTMLBodyElement;
  var c: CanvasRenderingContext2D;
  var d: Document;
}

const fluid = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = `hsl(${360 * Math.random()}, 50%, 50%)`;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

fluid(c);

export {};
