export function VideoCard(props: any) {
  return (
    <div>
      <img className="rounded-xl" src={props.image}></img>
      <div className="grid grid-cols-12 pt-4">
        <div className="col-span-1">
          <img
            className="rounded-full h-15 w-15"
            src={props.channelImage}
          ></img>
        </div>
        <div className=" col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="text-gray-400 text-base">{props.author}</div>
          <div className="text-gray-400 text-base">{props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
