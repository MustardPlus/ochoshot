import LinkBar from '@components/LinkBar';

const renderLinkBar = (inst, code) => {
    return (
        <LinkBar text={inst[0]} goto={inst[1]} color={inst[2]} source={inst[3]} code={code} />
    );
}

const LinkBarGroup = ( {lefty, righty} ) => {
    return (
        <div className="link-bar-group-bg">
        <div className="link-bar-group flex mx-auto">
            { renderLinkBar(lefty, "lefty") }
            { renderLinkBar(righty, "righty") }
        </div>
        </div>
    );
};

export default LinkBarGroup;