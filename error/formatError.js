"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _devAssert = _interopRequireDefault(require("../jsutils/devAssert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  /* istanbul ignore next */
  error || (0, _devAssert.default)(0, 'Received null or undefined error.');
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
