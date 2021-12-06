import { ErrorWrapper } from "./CustomError.styles";

function CustomError({error}) {
    return (
        <ErrorWrapper>
            {error}
        </ErrorWrapper>
    );
}
