import { jsonKeyJoin } from './FormElements'

export default function OptionalFieldGroup({
	keyPrefix,
	schema,
	formInputUpdateHandler,
}) {
	const {
		label,
		description,
		level,
		icon,
		jsonKey: _jsonKey,
		placeholder,
		validate,
		conditions,
		subParameters,
	} = schema

	const jsonKey = jsonKeyJoin(keyPrefix, _jsonKey)

	return (
		<>
			<div className="wrapper">optional field: {jsonKey}</div>
		</>
	)
}
