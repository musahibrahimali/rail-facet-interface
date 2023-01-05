import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Responsible A.I.</strong> by{" "}
                        <a href="https://rail.knust.edu.gh/">RAIL</a> under
                        the{" "}
                        <a href="https://github.com/gulfaraz/responsible_ai/blob/master/LICENSE">
                            GPL-3.0 license
                        </a>
                        .
                    </p>
                </div>
            </footer>
        );
    }
}
