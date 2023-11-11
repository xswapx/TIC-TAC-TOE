export default function Log( {logging} ){
    return(
        <ol id = "log">
            <h1>LOGS</h1>
            {logging.map((log) => (
                <li key={`${log.square.rowI}${log.square.colI}`}> Player {log.player} selected {log.square.rowI}, {log.square.colI}</li>
            ))}
        </ol>
    );
}