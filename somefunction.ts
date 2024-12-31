const moduleSchema = new Object({
  extend: () => {},
});

moduleSchema.extend({
  table: {
    tableId: "",
    tableName: "",
    tableDescription: "",
    icon: "",
    version: "",
    defaultViews: [],
    history: [],
    contextOptions: [
      {
        name: "mark_as_inactive", // name of the option has to be unique
        // configure the component to use for this option
        component: {
          // name of the component to use
          name: "ContextMenuOption",
          // add icon link
          icon: "https://cross-icon-circle",
          text: "Mark as inactive", // simple text
          // disable interactions on this component? set the below property to true
          disableInteractions: false,
          // override default layout of the component?
          layoutStyle: {
            layout: "flex",
            direction: "column",
            // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
            // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
            // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
            customStyle: "gap-10, justify-center, align-center",
          },
          // override the complete styling of the component.
          // NOTE: only applied to the root node in the component tree.
          styleOverrides: {
            strategy: "union|substract|replace",
            styles: "bg-red-500",
          },
          // override default variant for the component?
          variant: [
            {
              name: "base", // name of the variant to use
              size: undefined, // size variant to use, defaults to base when undefined here
              styleOverrides: {
                strategy: "union|substract|replace",
                styles: "bg-red-500",
              },
            },
          ],
          // pass props to the component
          // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
          props: {
            // [propName]: value,
          },
          // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
          // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
          variants: [
            {
              // either `on` or `condition` or both must be defined.
              // when both are defined, both `on` and `condition` will be in AND operator.
              // else, only `condition` or `on` will be used as a condition.
              on: "hover", // suggestions with basic types of UI interactions
              // either JS expressions or predefined `condition_id`
              // if using `condition_id` then must pass the parameters for the
              // resolver function and the resolver function as well.
              condition: {
                expression: "", // when expression is defined, the subsequent properties must not be defined.
                resolverFunction: "",
                resolverFunctionParams: [],
                passWhenResolvesTo: "", // the condition will only pass when the resolverFunctions returns the value defined in this property.
              },
              select: "hover", // suggestions with variant names
            },
          ],
          // pass children components if required
          // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
          children: [
            {
              childType: "component", // component | plain_text
              // based on the above property value (component||plain_text) different properties are available to configure.
              // defining the below component just for example purposes. only define icons or similar ui-elements in the child component here when you actually have to bind it with some action.
              // or else, use the icons property to define the icon (it will not be interactive)
              // !NOTE: childType=="component"?component!==undefined|null:plain_text!==undefined|null
              component: {
                name: undefined,
                icon: "https://cross-icon-circle",
                disableInteractions: true, // you don't want to perform any interaction on the icon itself
                variant: [
                  {
                    name: "base", // name of the variant to use
                    size: "sm", // size variant to use
                    styleOverrides: {
                      // strategy: "union|substract|replace",
                      // styles: "bg-red-500",
                    },
                  },
                ],
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                styleOverrides: {
                  // strategy: "union|substract|replace",
                  // styles: "bg-red-500",
                },
                // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                variants: [
                  /**
                        {
                          // either `on` or `condition` or both must be defined.
                          // when both are defined, both on and condition will be in AND operator else,
                          // only fields `condition` or `on` will be used as a condition.
                          on: "hover", // suggestions with basic types of UI interactions
                          // either JS expressions or predefined `condition_id`
                          // if using `condition_id` then must pass the parameters for the
                          // resolver function and the resolver function as well.
                          condition: {
                            expression: "",
                            resolverFunction: "",
                            resolverFunctionParams: [],
                          },
                          select: "hover", // suggestions with variant names
                        },
                         */
                ],
                // override default layout of the component?
                layoutStyle: {
                  layout: "flex",
                  direction: "column",
                  // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                  // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                  // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                  customStyle: "gap-10, justify-center, align-center",
                },
              },
              plain_text: undefined,
            },
            {
              // NOTE: if you use plain_text as child_type, you won't be able to control the styling of this text since it will be passed and replaces with `innerHtml` to the component.
              // Therefore, we recommend not to use this except when you have a specialized use case; instead, use the Text component so you can control every controllable property of the Text Component.
              childType: "plain_text", // component | plain_text
              // based on the above property value (component||plain_text) different properties are available to configure.
              component: undefined,
              plain_text: "Mark as inactive",
            },
          ],
        },
        // the property - trigger below will only work if the component given above does not have its own trigger defined within the component.
        // we discourage defining any actions within the components so that the trigger defined below will behave expectedly.
        trigger: "onClick", // predefined trigger options to select from
        hasSubMenu: false, // set to true if this option has a sub-menu
        subMenuOptions: [], // same schema as contextOptions
        // property action is required if `hasSubMenu` is set to false
        action: {
          type: "redirect|function|rest-request|ui-interaction|custom-action",
          // optionally provide an instance specific name for better observability and debugging
          name: "", // if type is set to function, this name will be prefixed to the functionName property.
          // property `id` is required when type is "custom-action", optionally required when type is "rest-request",
          // also optionally required, when type is ui-interaction but does not require any further interactions by user - basically static ui changes.
          // NOTE: do not provide the id property if this action is a non-generic specialized function. we advise not to define these types of specialized functions earlier.
          // Or only provide the id, params (if applicable), postAction (if required), confirmation (if required), name (if already defined in the action, this will override)
          id: "",
          // redirect options, only required when type is redirect.
          redirectOptions: {
            redirectUrl: "", // url to redirect to
            redirectTimer: 5000, // milliseconds
            redirectToNewTab: true, // redirect to new tab
            // optionally, send a payload to the next page for stateful actions
            payload: {},
          },
          // function to invoke, required when type is set to function
          functionName: "",
          // customJS options. only required when the action type is set to `custom-action`
          customJS: {
            // the properties in this object will be used to define a temporary function for this action which will be destroyed as soon as the function completes its invocation successful or failed.
            functionName: "", // define a name for the function,
            description: "", // optionally, describe the function.
            // define function parameters
            params: [
              {
                name: "", // referance name for the parameter to be referenced with,
                type: "", // data type of the variable
              },
            ],
            isVoid: false, // if this function does not return anything, We strongly discourage the use of this since it doesn't give you any information if the run was successful or not.
            // is this function asyncronous. if you're defining async functions please do not wrap them in trycatch or async/await syntax or set this property as false if doing so.
            // because setting this property true will wrap the code in trycatch.
            isAsync: true,
            code: "", // code to execute inside the function
            // catch the returns from the code and perform further actions if required.
            returns: {
              catch: [""], // variable names to catch from the returns,
              // conditions to apply.
              // takes in a 2D-Array. the arrays in the first array [a,b,c] will be resolved with AND operator,
              // and the objects within the second arrays a,b,c will be resolved with OR operator.
              conditions: [
                [
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                  // OR Operator
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                ],
                // AND operator
                [
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                  // OR Operator
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                ],
              ],
            },
            // the action below will only run when the conditions above pass.
            // if isAsync is set to true and the promise is resolved and the condition is also resolved to true, the below function will be invoked. if not, only the condition will be taken into account.
            onSuccess: {}, // nested action || postAction to perform
            // the action below will only run when the conditions above fail.
            // if isAsync is set to true and the promise is rejected and the condition is also resolved to false, the below function will be invoked. if not, only the condition will be taken into account.
            onFailure: {}, // nested action || postAction to perform
          },
          // rest request configuration. only required when the action type is set to rest-request.
          restConfig: {
            request: {
              method: "GET|POST|PUT|DELETE",
              endpoint: "",
              validation: {
                validationSchema: zodSchema, // zod schema to validate with
                onError: {
                  message: "",
                  action: {}, // same schema as action
                }, // on validation error
              },
              payload: {},
              headers: {},
              timeoutDuration: 5000, // default is 5000 milliseconds
            },
            //   will catch all responses and perform specific actions based on status code and response data
            response: [
              {
                code: "200",
                validattion: {
                  validationSchema: zodSchema, //zod schema to validate the response object with. If this passes, the action after this object will be carried out.
                },
                action: {}, // same schema as action
              },
              {
                code: "400",
                validation: {
                  validationSchema: zodSchema, //zod schema to validate the response object with
                },
                action: {}, // same schema as action
              },
            ],
          },
          // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
          // expects a key-value pair
          params: {} | zodSchema,
          // postAction is also action, the only difference is that postAction is invoked after completion (successfull or unsuccessful) of the currently running action.
          // NOTE: if you want to invoke an action after either of successful or unsuccessful completion of the currently running function you might want to use 'onSuccess' or 'onFailure' properties.
          postAction: {
            type: "custom-action",
            id: "invalidate_table_data",
            name: "invalidate_org_table_data",
            redirectOptions: undefined,
            // function to invoke, required when type is set to function
            functionName: undefined,
            // customJS options. only required when the action type is set to `custom-action`
            customJS: {
              // the properties in this object will be used to define a temporary function for this action which will be destroyed as soon as the function completes its invocation successful or failed.
              functionName: "invalidate_table_data", // define a name for the function,
              description: "", // optionally, describe the function.
              // define function parameters
              params: [
                {
                  name: "", // referance name for the parameter to be referenced with,
                  type: "", // data type of the variable
                },
              ],
              isVoid: false, // if this function does not return anything, We strongly discourage the use of this since it doesn't give you any information if the run was successful or not.
  
              // is this function asyncronous?
              //!NOTE: if you're defining async functions please do not wrap them in trycatch or async/await syntax or set this property as false if doing so.
              //! because setting this property to true will wrap the code in trycatch.
              isAsync: true,
              code: "", // code to execute inside the function. stringified, minified js having no dependencies except for the params defined above and with the same name.
              // catch the returns from the code and perform further actions if required.
              returns: {
                catch: [""], // variable names to catch from the returns,
                // conditions to apply.
                // takes in a 2D-Array. the arrays in the first array [a,b,c] will be resolved with AND operator,
                // and the objects within the second arrays a,b,c will be resolved with OR operator.
                conditions: [
                  [
                    {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                      passWhenResolvesTo: "",
                    },
                    // OR Operator
                    {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                      passWhenResolvesTo: "",
                    },
                  ],
                  // AND operator
                  [
                    {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                      passWhenResolvesTo: "",
                    },
                    // OR Operator
                    {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                      passWhenResolvesTo: "",
                    },
                  ],
                ],
              },
              // the action below will only run when the conditions above pass.
              // if isAsync is set to true and the promise is resolved and the condition is also resolved to true, the below function will be invoked. if not, only the condition will be taken into account.
              onSuccess: {}, // nested action || postAction to perform
              // the action below will only run when the conditions above fail.
              // if isAsync is set to true and the promise is rejected and the condition is also resolved to false, the below function will be invoked. if not, only the condition will be taken into account.
              onFailure: {}, // nested action || postAction to perform
            },
            // rest request configuration. only required when the action type is set to rest-request.
            restConfig: undefined,
            // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
            // expects a key-value pair
            params: undefined,
            // you can even add a chain of actions by nesting postActions further. though there must be a limit to 10 chains.
            /**
             postAction: {
              id: "invalidate_table_data",
              name: "invalidate_org_table_data",
              postAction: {
                  id: "invalidate_table_data",
                  name: "invalidate_org_table_data",
              }
             }
             */
            confirmation: undefined
          },
          // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
          onSuccess: {},
          onFailure: {},
          // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
          confirmation: {
            required: true,
            //   message to show in the modal
            message:
              "You are about to invalidate the data, are you sure you want to proceed?",
            // you can also make this dynamic by passing variables to the string `${variableName}` ex:
            //
            // message: `You are about to mark this client as ${status!=='inactive'?'inactive':'active'}. Once marked as ${status!=='inactive'?'inactive':'active'}, this client will be moved to the '${status!=='inactive'?[...getTableSchema(tableId).getDefaultFilters()].filter({fieldName:"status",value:"inactive"})[0].name.toString():'active'}' section. Do you want to proceed?`
            //
            interactions: [
              // cancel button
              {
                name: "cancel",
                trigger: "onClick",
                action: {
                  type: "ui-interaction",
                  id: "action_uuid_1",
                  name: undefined,
                  params: undefined,
                  postAction: undefined,
                  // redirect options, only required when type is redirect.
                  redirectOptions: undefined,
                  // function to invoke, required when type is set to function
                  functionName: "",
                  // customJS options. only required when the action type is set to `custom-action`
                  customJS: undefined,
                  // rest request configuration. only required when the action type is set to rest-request.
                  restConfig: undefined,
                  // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                  // expects a key-value pair
                  params: undefined,
                  // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                  onSuccess: {},
                  onFailure: {},
                  // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                  confirmation: undefined,
                },
                component: {
                  name: "PnUiButton",
                  icon: "https://some-another-iconlink.com",
                  text: "Cancel",
                  disableInteractions: false,
                  variant: [
                    {
                      name: "", // name of the variant to use
                      size: "", // size variant to use
                      styleOverrides: {
                        strategy: "union|substract|replace",
                        styles: "bg-red-500",
                      },
                    },
                  ],
                  // override default layout of the component?
                  layoutStyle: {
                    layout: "flex",
                    direction: "column",
                    // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                    // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                    // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                    customStyle: "gap-10, justify-center, align-center",
                  },
                  // override the complete styling of the component.
                  // NOTE: only applied to the root node in the component tree.
                  styleOverrides: {
                    strategy: "union|substract|replace",
                    styles: "bg-red-500",
                  },
                  // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                  props: {
                    // [propName]: value,
                  },
                  // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                  // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                  variants: [
                    {
                      // either `on` or `condition` or both must be defined.
                      // when both are defined, both on and condition will be in AND operator else,
                      // only `condition` or `on` will be used as a condition.
                      on: "hover", // suggestions with basic types of UI interactions
                      // either JS expressions or predefined `condition_id`
                      // if using `condition_id` then must pass the parameters for the
                      // resolver function and the resolver function as well.
                      condition: {
                        expression: "",
                        resolverFunction: "",
                        resolverFunctionParams: [],
                      },
                      select: "hover", // suggestions with variant names
                    },
                  ],
                  // pass children components if required
                  // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                  children: [],
                },
              },
              // the cross button on the confirmation modal
              {
                name: "cross_button", // either name or icon or both must be defined
                trigger: "onClick",
                action: {
                  type: "ui-interaction",
                  id: "action_uuid_1",
                  name: undefined,
                  params: undefined,
                  postAction: undefined,
                  // redirect options, only required when type is redirect.
                  redirectOptions: undefined,
                  // function to invoke, required when type is set to function
                  functionName: "",
                  // customJS options. only required when the action type is set to `custom-action`
                  customJS: undefined,
                  // rest request configuration. only required when the action type is set to rest-request.
                  restConfig: undefined,
                  // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                  // expects a key-value pair
                  params: undefined,
                  // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                  onSuccess: {},
                  onFailure: {},
                  // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                  confirmation: undefined,
                },
                component: {
                  name: "PnUiButton",
                  icon: "https://some-another-iconlink.com",
                  text: undefined,
                  disableInteractions: false,
                  variant: [
                    {
                      name: "", // name of the variant to use
                      size: "", // size variant to use
                      styleOverrides: {
                        strategy: "union|substract|replace",
                        styles: "bg-red-500",
                      },
                    },
                  ],
                  // override default layout of the component?
                  layoutStyle: {
                    layout: "flex",
                    direction: "column",
                    // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                    // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                    // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                    customStyle: "gap-10, justify-center, align-center",
                  },
                  // override the complete styling of the component.
                  // NOTE: only applied to the root node in the component tree.
                  styleOverrides: {
                    strategy: "union|substract|replace",
                    styles: "bg-red-500",
                  },
                  // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                  props: {
                    // [propName]: value,
                  },
                  // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                  // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                  variants: [
                    {
                      // either `on` or `condition` or both must be defined.
                      // when both are defined, both on and condition will be in AND operator else,
                      // only `condition` or `on` will be used as a condition.
                      on: "hover", // suggestions with basic types of UI interactions
                      // either JS expressions or predefined `condition_id`
                      // if using `condition_id` then must pass the parameters for the
                      // resolver function and the resolver function as well.
                      condition: {
                        expression: "",
                        resolverFunction: "",
                        resolverFunctionParams: [],
                      },
                      select: "hover", // suggestions with variant names
                    },
                  ],
                  // pass children components if required
                  // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                  children: [],
                },
              },
              // confirm button
              {
                name: "Confirm", // either name or icon or both must be defined
                disableInteractions: false,
                trigger: "onClick",
                action: {
                  type: "ui-interaction",
                  id: "action_uuid_2",
                  name: undefined,
                  params: undefined,
                  postAction: undefined,
                  // redirect options, only required when type is redirect.
                  redirectOptions: undefined,
                  // function to invoke, required when type is set to function
                  functionName: "",
                  // customJS options. only required when the action type is set to `custom-action`
                  customJS: undefined,
                  // rest request configuration. only required when the action type is set to rest-request.
                  restConfig: undefined,
                  // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                  // expects a key-value pair
                  params: undefined,
                  // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                  onSuccess: {},
                  onFailure: {},
                  // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                  confirmation: undefined,
                },
                component: {
                  name: "PnUiButton",
                  icon: "https://some-another-iconlink.com",
                  text: "Confirm",
                  disableInteractions: false,
                  variant: [
                    {
                      name: "", // name of the variant to use
                      size: "", // size variant to use
                      styleOverrides: {
                        strategy: "union|substract|replace",
                        styles: "bg-red-500",
                      },
                    },
                  ],
                  // override default layout of the component?
                  layoutStyle: {
                    layout: "flex",
                    direction: "column",
                    // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                    // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                    // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                    customStyle: "gap-10, justify-center, align-center",
                  },
                  // override the complete styling of the component.
                  // NOTE: only applied to the root node in the component tree.
                  styleOverrides: {
                    strategy: "union|substract|replace",
                    styles: "bg-red-500",
                  },
                  // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                  props: {
                    // [propName]: value,
                  },
                  // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                  // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                  variants: [
                    {
                      // either `on` or `condition` or both must be defined.
                      // when both are defined, both on and condition will be in AND operator else,
                      // only `condition` or `on` will be used as a condition.
                      on: "hover", // suggestions with basic types of UI interactions
                      // either JS expressions or predefined `condition_id`
                      // if using `condition_id` then must pass the parameters for the
                      // resolver function and the resolver function as well.
                      condition: {
                        expression: "",
                        resolverFunction: "",
                        resolverFunctionParams: [],
                      },
                      select: "hover", // suggestions with variant names
                    },
                  ],
                  // pass children components if required
                  // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                  children: [],
                },
              },
            ],
            attachListeners: [
              {
                name: "onClickOutside",
                action: {
                  type: "ui-interaction",
                  id: "action_uuid_1",
                  name: undefined,
                  params: undefined,
                  postAction: undefined,
                  // redirect options, only required when type is redirect.
                  redirectOptions: undefined,
                  // function to invoke, required when type is set to function
                  functionName: "",
                  // customJS options. only required when the action type is set to `custom-action`
                  customJS: undefined,
                  // rest request configuration. only required when the action type is set to rest-request.
                  restConfig: undefined,
                  // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                  // expects a key-value pair
                  params: undefined,
                  // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                  onSuccess: {},
                  onFailure: {},
                  // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                  confirmation: undefined,
                },
              },
            ],
          },
        },
      },
      // context options like Add Tasks, Expand Record, Edit Record, Delete Record can be defined elsewhere and imported here for reusability. The params for which must be taken from the state of the active table-tab.
      ...defaultContextOptions,
    ],
  },
});
const Types = {
  // date / datetime
  DATE:"DATE",
  DATE_TIME:"DATE_TIME",
  // strings
  SHORT_TEXT:"SHORT_TEXT",
  LONG_TEXT:"LONG_TEXT",
  URL:"URL",
  EMAIL:"EMAIL",
  PHONE:"PHONE",
  // user
  USER:"USER",
  // file
  ATTACHMENT:"ATTACHMENT",
  // boolean
  CHECKBOX:"CHECKBOX",
  // arrays
  MUTLI_SELECT:"MUTLI_SELECT",
  SINGLE_SELECT:"SINGLE_SELECT", // <- sometimes can also be boolean but needs to be rendered as single select, ex: "Active/Inactive"
  // numbers
  NUMBER:"NUMBER",
  PERCENT:"PERCENT",
  CURRENCY:"CURRENCY",
  // relations
  ONE_TO_MANY:"ONE_TO_MANY",
  ONE_TO_ONE:"ONE_TO_ONE",
  // geolocation
  GEOLOCATION:"GEOLOCATION" // need to be able to filter by lat,long, or zipcodes, with radius
}

const filterTypes = {
  RELATION: [Types.ONE_TO_MANY,Types.ONE_TO_ONE],
  STRING: [Types.EMAIL, Types.LONG_TEXT, Types.SHORT_TEXT, Types.URL, Types.PHONE],
  NUMBER: [Types.NUMBER, Types.PERCENT, Types.CURRENCY],
  DATE: [Types.DATE],
  DATETIME:[Types.DATE_TIME],
  BOOLEAN: [Types.CHECKBOX, Types.SINGLE_SELECT],
  FILE: [Types.ATTACHMENT],
  USER:[Types.USER],
  ARRAY:[Types.MUTLI_SELECT],
  GEOLOCATION: [Types.GEOLOCATION]
}

const filterTypeToOperators = {
  "BOOLEAN": {
    operators: {
      is: "==",
      isNot: "!=="
    },
    values: {
      "true": "active",
      "false": "inactive"
    }
  }
}

const a = Object.keys(filterTypeToOperators.BOOLEAN.operators)
a.keys.name.normalize


const table = {
  tableId: "",
  tableName: "",
  tableDescription: "",
  icon: "",
  version: "",
  fields: {
    "sumbissions": {
      displayName: "Submissions To Clients",
      type: Types.ONE_TO_ONE,
      icon: "",
      filterType: "RELATION"
    }
  },
  defaultViews: [],
  history: [],
  contextOptions: [
    {
      name: "mark_as_inactive", // name of the option has to be unique
      // configure the component to use for this option
      component: {
        // name of the component to use
        name: "ContextMenuOption",
        // add icon link
        icon: "https://cross-icon-circle",
        text: "Mark as inactive", // simple text
        // disable interactions on this component? set the below property to true
        disableInteractions: false,
        // override default layout of the component?
        layoutStyle: {
          layout: "flex",
          direction: "column",
          // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
          // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
          // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
          customStyle: "gap-10, justify-center, align-center",
        },
        // override the complete styling of the component.
        // NOTE: only applied to the root node in the component tree.
        styleOverrides: {
          strategy: "union|substract|replace",
          styles: "bg-red-500",
        },
        // override default variant for the component?
        variant: [
          {
            name: "base", // name of the variant to use
            size: undefined, // size variant to use, defaults to base when undefined here
            styleOverrides: {
              strategy: "union|substract|replace",
              styles: "bg-red-500",
            },
          },
        ],
        // pass props to the component
        // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
        props: {
          // [propName]: value,
        },
        // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
        // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
        variants: [
          {
            // either `on` or `condition` or both must be defined.
            // when both are defined, both `on` and `condition` will be in AND operator.
            // else, only `condition` or `on` will be used as a condition.
            on: "hover", // suggestions with basic types of UI interactions
            // either JS expressions or predefined `condition_id`
            // if using `condition_id` then must pass the parameters for the
            // resolver function and the resolver function as well.
            condition: {
              expression: "", // when expression is defined, the subsequent properties must not be defined.
              resolverFunction: "",
              resolverFunctionParams: [],
              passWhenResolvesTo: "", // the condition will only pass when the resolverFunctions returns the value defined in this property.
            },
            select: "hover", // suggestions with variant names
          },
        ],
        // pass children components if required
        // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
        children: [
          {
            childType: "component", // component | plain_text
            // based on the above property value (component||plain_text) different properties are available to configure.
            // defining the below component just for example purposes. only define icons or similar ui-elements in the child component here when you actually have to bind it with some action.
            // or else, use the icons property to define the icon (it will not be interactive)
            // !NOTE: childType=="component"?component!==undefined|null:plain_text!==undefined|null
            component: {
              name: undefined,
              icon: "https://cross-icon-circle",
              disableInteractions: true, // you don't want to perform any interaction on the icon itself
              variant: [
                {
                  name: "base", // name of the variant to use
                  size: "sm", // size variant to use
                  styleOverrides: {
                    // strategy: "union|substract|replace",
                    // styles: "bg-red-500",
                  },
                },
              ],
              // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
              props: {
                // [propName]: value,
              },
              styleOverrides: {
                // strategy: "union|substract|replace",
                // styles: "bg-red-500",
              },
              // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
              // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
              variants: [
                /**
                      {
                        // either `on` or `condition` or both must be defined.
                        // when both are defined, both on and condition will be in AND operator else,
                        // only fields `condition` or `on` will be used as a condition.
                        on: "hover", // suggestions with basic types of UI interactions
                        // either JS expressions or predefined `condition_id`
                        // if using `condition_id` then must pass the parameters for the
                        // resolver function and the resolver function as well.
                        condition: {
                          expression: "",
                          resolverFunction: "",
                          resolverFunctionParams: [],
                        },
                        select: "hover", // suggestions with variant names
                      },
                       */
              ],
              // override default layout of the component?
              layoutStyle: {
                layout: "flex",
                direction: "column",
                // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                customStyle: "gap-10, justify-center, align-center",
              },
            },
            plain_text: undefined,
          },
          {
            // NOTE: if you use plain_text as child_type, you won't be able to control the styling of this text since it will be passed and replaces with `innerHtml` to the component.
            // Therefore, we recommend not to use this except when you have a specialized use case; instead, use the Text component so you can control every controllable property of the Text Component.
            childType: "plain_text", // component | plain_text
            // based on the above property value (component||plain_text) different properties are available to configure.
            component: undefined,
            plain_text: "Mark as inactive",
          },
        ],
      },
      // the property - trigger below will only work if the component given above does not have its own trigger defined within the component.
      // we discourage defining any actions within the components so that the trigger defined below will behave expectedly.
      trigger: "onClick", // predefined trigger options to select from
      hasSubMenu: false, // set to true if this option has a sub-menu
      subMenuOptions: [], // same schema as contextOptions
      // property action is required if `hasSubMenu` is set to false
      action: {
        type: "redirect|function|rest-request|ui-interaction|custom-action",
        // optionally provide an instance specific name for better observability and debugging
        name: "", // if type is set to function, this name will be prefixed to the functionName property.
        // property `id` is required when type is "custom-action", optionally required when type is "rest-request",
        // also optionally required, when type is ui-interaction but does not require any further interactions by user - basically static ui changes.
        // NOTE: do not provide the id property if this action is a non-generic specialized function. we advise not to define these types of specialized functions earlier.
        // Or only provide the id, params (if applicable), postAction (if required), confirmation (if required), name (if already defined in the action, this will override)
        id: "",
        // redirect options, only required when type is redirect.
        redirectOptions: {
          redirectUrl: "", // url to redirect to
          redirectTimer: 5000, // milliseconds
          redirectToNewTab: true, // redirect to new tab
          // optionally, send a payload to the next page for stateful actions
          payload: {},
        },
        // function to invoke, required when type is set to function
        functionName: "",
        // customJS options. only required when the action type is set to `custom-action`
        customJS: {
          // the properties in this object will be used to define a temporary function for this action which will be destroyed as soon as the function completes its invocation successful or failed.
          functionName: "", // define a name for the function,
          description: "", // optionally, describe the function.
          // define function parameters
          params: [
            {
              name: "", // referance name for the parameter to be referenced with,
              type: "", // data type of the variable
            },
          ],
          isVoid: false, // if this function does not return anything, We strongly discourage the use of this since it doesn't give you any information if the run was successful or not.
          // is this function asyncronous. if you're defining async functions please do not wrap them in trycatch or async/await syntax or set this property as false if doing so.
          // because setting this property true will wrap the code in trycatch.
          isAsync: true,
          code: "", // code to execute inside the function
          // catch the returns from the code and perform further actions if required.
          returns: {
            catch: [""], // variable names to catch from the returns,
            // conditions to apply.
            // takes in a 2D-Array. the arrays in the first array [a,b,c] will be resolved with AND operator,
            // and the objects within the second arrays a,b,c will be resolved with OR operator.
            conditions: [
              [
                {
                  expression: "",
                  resolverFunction: "",
                  resolverFunctionParams: [],
                  passWhenResolvesTo: "",
                },
                // OR Operator
                {
                  expression: "",
                  resolverFunction: "",
                  resolverFunctionParams: [],
                  passWhenResolvesTo: "",
                },
              ],
              // AND operator
              [
                {
                  expression: "",
                  resolverFunction: "",
                  resolverFunctionParams: [],
                  passWhenResolvesTo: "",
                },
                // OR Operator
                {
                  expression: "",
                  resolverFunction: "",
                  resolverFunctionParams: [],
                  passWhenResolvesTo: "",
                },
              ],
            ],
          },
          // the action below will only run when the conditions above pass.
          // if isAsync is set to true and the promise is resolved and the condition is also resolved to true, the below function will be invoked. if not, only the condition will be taken into account.
          onSuccess: {}, // nested action || postAction to perform
          // the action below will only run when the conditions above fail.
          // if isAsync is set to true and the promise is rejected and the condition is also resolved to false, the below function will be invoked. if not, only the condition will be taken into account.
          onFailure: {}, // nested action || postAction to perform
        },
        // rest request configuration. only required when the action type is set to rest-request.
        restConfig: {
          request: {
            method: "GET|POST|PUT|DELETE",
            endpoint: "",
            validation: {
              validationSchema: zodSchema, // zod schema to validate with
              onError: {
                message: "",
                action: {}, // same schema as action
              }, // on validation error
            },
            payload: {},
            headers: {},
            timeoutDuration: 5000, // default is 5000 milliseconds
          },
          //   will catch all responses and perform specific actions based on status code and response data
          response: [
            {
              code: "200",
              validattion: {
                validationSchema: zodSchema, //zod schema to validate the response object with. If this passes, the action after this object will be carried out.
              },
              action: {}, // same schema as action
            },
            {
              code: "400",
              validation: {
                validationSchema: zodSchema, //zod schema to validate the response object with
              },
              action: {}, // same schema as action
            },
          ],
        },
        // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
        // expects a key-value pair
        params: {} | zodSchema,
        // postAction is also action, the only difference is that postAction is invoked after completion (successfull or unsuccessful) of the currently running action.
        // NOTE: if you want to invoke an action after either of successful or unsuccessful completion of the currently running function you might want to use 'onSuccess' or 'onFailure' properties.
        postAction: {
          type: "custom-action",
          id: "invalidate_table_data",
          name: "invalidate_org_table_data",
          redirectOptions: undefined,
          // function to invoke, required when type is set to function
          functionName: undefined,
          // customJS options. only required when the action type is set to `custom-action`
          customJS: {
            // the properties in this object will be used to define a temporary function for this action which will be destroyed as soon as the function completes its invocation successful or failed.
            functionName: "invalidate_table_data", // define a name for the function,
            description: "", // optionally, describe the function.
            // define function parameters
            params: [
              {
                name: "", // referance name for the parameter to be referenced with,
                type: "", // data type of the variable
              },
            ],
            isVoid: false, // if this function does not return anything, We strongly discourage the use of this since it doesn't give you any information if the run was successful or not.

            // is this function asyncronous?
            //!NOTE: if you're defining async functions please do not wrap them in trycatch or async/await syntax or set this property as false if doing so.
            //! because setting this property to true will wrap the code in trycatch.
            isAsync: true,
            code: "", // code to execute inside the function. stringified, minified js having no dependencies except for the params defined above and with the same name.
            // catch the returns from the code and perform further actions if required.
            returns: {
              catch: [""], // variable names to catch from the returns,
              // conditions to apply.
              // takes in a 2D-Array. the arrays in the first array [a,b,c] will be resolved with AND operator,
              // and the objects within the second arrays a,b,c will be resolved with OR operator.
              conditions: [
                [
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                  // OR Operator
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                ],
                // AND operator
                [
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                  // OR Operator
                  {
                    expression: "",
                    resolverFunction: "",
                    resolverFunctionParams: [],
                    passWhenResolvesTo: "",
                  },
                ],
              ],
            },
            // the action below will only run when the conditions above pass.
            // if isAsync is set to true and the promise is resolved and the condition is also resolved to true, the below function will be invoked. if not, only the condition will be taken into account.
            onSuccess: {}, // nested action || postAction to perform
            // the action below will only run when the conditions above fail.
            // if isAsync is set to true and the promise is rejected and the condition is also resolved to false, the below function will be invoked. if not, only the condition will be taken into account.
            onFailure: {}, // nested action || postAction to perform
          },
          // rest request configuration. only required when the action type is set to rest-request.
          restConfig: undefined,
          // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
          // expects a key-value pair
          params: undefined,
          // you can even add a chain of actions by nesting postActions further. though there must be a limit to 10 chains.
          /**
           postAction: {
            id: "invalidate_table_data",
            name: "invalidate_org_table_data",
            postAction: {
                id: "invalidate_table_data",
                name: "invalidate_org_table_data",
            }
           }
           */
          confirmation: undefined
        },
        // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
        onSuccess: {},
        onFailure: {},
        // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
        confirmation: {
          required: true,
          //   message to show in the modal
          message:
            "You are about to invalidate the data, are you sure you want to proceed?",
          // you can also make this dynamic by passing variables to the string `${variableName}` ex:
          //
          // message: `You are about to mark this client as ${status!=='inactive'?'inactive':'active'}. Once marked as ${status!=='inactive'?'inactive':'active'}, this client will be moved to the '${status!=='inactive'?[...getTableSchema(tableId).getDefaultFilters()].filter({fieldName:"status",value:"inactive"})[0].name.toString():'active'}' section. Do you want to proceed?`
          //
          interactions: [
            // cancel button
            {
              name: "cancel",
              trigger: "onClick",
              action: {
                type: "ui-interaction",
                id: "action_uuid_1",
                name: undefined,
                params: undefined,
                postAction: undefined,
                // redirect options, only required when type is redirect.
                redirectOptions: undefined,
                // function to invoke, required when type is set to function
                functionName: "",
                // customJS options. only required when the action type is set to `custom-action`
                customJS: undefined,
                // rest request configuration. only required when the action type is set to rest-request.
                restConfig: undefined,
                // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                // expects a key-value pair
                params: undefined,
                // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                onSuccess: {},
                onFailure: {},
                // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                confirmation: undefined,
              },
              component: {
                name: "PnUiButton",
                icon: "https://some-another-iconlink.com",
                text: "Cancel",
                disableInteractions: false,
                variant: [
                  {
                    name: "", // name of the variant to use
                    size: "", // size variant to use
                    styleOverrides: {
                      strategy: "union|substract|replace",
                      styles: "bg-red-500",
                    },
                  },
                ],
                // override default layout of the component?
                layoutStyle: {
                  layout: "flex",
                  direction: "column",
                  // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                  // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                  // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                  customStyle: "gap-10, justify-center, align-center",
                },
                // override the complete styling of the component.
                // NOTE: only applied to the root node in the component tree.
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "bg-red-500",
                },
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                variants: [
                  {
                    // either `on` or `condition` or both must be defined.
                    // when both are defined, both on and condition will be in AND operator else,
                    // only `condition` or `on` will be used as a condition.
                    on: "hover", // suggestions with basic types of UI interactions
                    // either JS expressions or predefined `condition_id`
                    // if using `condition_id` then must pass the parameters for the
                    // resolver function and the resolver function as well.
                    condition: {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                    },
                    select: "hover", // suggestions with variant names
                  },
                ],
                // pass children components if required
                // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                children: [],
              },
            },
            // the cross button on the confirmation modal
            {
              name: "cross_button", // either name or icon or both must be defined
              trigger: "onClick",
              action: {
                type: "ui-interaction",
                id: "action_uuid_1",
                name: undefined,
                params: undefined,
                postAction: undefined,
                // redirect options, only required when type is redirect.
                redirectOptions: undefined,
                // function to invoke, required when type is set to function
                functionName: "",
                // customJS options. only required when the action type is set to `custom-action`
                customJS: undefined,
                // rest request configuration. only required when the action type is set to rest-request.
                restConfig: undefined,
                // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                // expects a key-value pair
                params: undefined,
                // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                onSuccess: {},
                onFailure: {},
                // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                confirmation: undefined,
              },
              component: {
                name: "PnUiButton",
                icon: "https://some-another-iconlink.com",
                text: undefined,
                disableInteractions: false,
                variant: [
                  {
                    name: "", // name of the variant to use
                    size: "", // size variant to use
                    styleOverrides: {
                      strategy: "union|substract|replace",
                      styles: "bg-red-500",
                    },
                  },
                ],
                // override default layout of the component?
                layoutStyle: {
                  layout: "flex",
                  direction: "column",
                  // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                  // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                  // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                  customStyle: "gap-10, justify-center, align-center",
                },
                // override the complete styling of the component.
                // NOTE: only applied to the root node in the component tree.
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "bg-red-500",
                },
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                variants: [
                  {
                    // either `on` or `condition` or both must be defined.
                    // when both are defined, both on and condition will be in AND operator else,
                    // only `condition` or `on` will be used as a condition.
                    on: "hover", // suggestions with basic types of UI interactions
                    // either JS expressions or predefined `condition_id`
                    // if using `condition_id` then must pass the parameters for the
                    // resolver function and the resolver function as well.
                    condition: {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                    },
                    select: "hover", // suggestions with variant names
                  },
                ],
                // pass children components if required
                // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                children: [],
              },
            },
            // confirm button
            {
              name: "Confirm", // either name or icon or both must be defined
              disableInteractions: false,
              trigger: "onClick",
              action: {
                type: "ui-interaction",
                id: "action_uuid_2",
                name: undefined,
                params: undefined,
                postAction: undefined,
                // redirect options, only required when type is redirect.
                redirectOptions: undefined,
                // function to invoke, required when type is set to function
                functionName: "",
                // customJS options. only required when the action type is set to `custom-action`
                customJS: undefined,
                // rest request configuration. only required when the action type is set to rest-request.
                restConfig: undefined,
                // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                // expects a key-value pair
                params: undefined,
                // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                onSuccess: {},
                onFailure: {},
                // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                confirmation: undefined,
              },
              component: {
                name: "PnUiButton",
                icon: "https://some-another-iconlink.com",
                text: "Confirm",
                disableInteractions: false,
                variant: [
                  {
                    name: "", // name of the variant to use
                    size: "", // size variant to use
                    styleOverrides: {
                      strategy: "union|substract|replace",
                      styles: "bg-red-500",
                    },
                  },
                ],
                // override default layout of the component?
                layoutStyle: {
                  layout: "flex",
                  direction: "column",
                  // pay attention that the style tokens below are separated by comma. This is so that if these are already defined, it will be overridden if it doesn't match.
                  // ex: already defined as justify-between will be replaced with justify-center but if justify-center is already there then, we won't add justify-center again.
                  // additionally, only layout options will be allowed here. for other styling overrides, refer to the `styleOverrides` property
                  customStyle: "gap-10, justify-center, align-center",
                },
                // override the complete styling of the component.
                // NOTE: only applied to the root node in the component tree.
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "bg-red-500",
                },
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                // usually when a variant is already selected, all the actions to perform and transition variants are also defined in the component itself.
                // but sometimes, either you're creating completely new component here or you want to change the behaviour of the component.
                variants: [
                  {
                    // either `on` or `condition` or both must be defined.
                    // when both are defined, both on and condition will be in AND operator else,
                    // only `condition` or `on` will be used as a condition.
                    on: "hover", // suggestions with basic types of UI interactions
                    // either JS expressions or predefined `condition_id`
                    // if using `condition_id` then must pass the parameters for the
                    // resolver function and the resolver function as well.
                    condition: {
                      expression: "",
                      resolverFunction: "",
                      resolverFunctionParams: [],
                    },
                    select: "hover", // suggestions with variant names
                  },
                ],
                // pass children components if required
                // !NOTE: only use children if you want interactive elements, components or text inside this component. or else just use `icon` and/or `text` fields
                children: [],
              },
            },
          ],
          attachListeners: [
            {
              name: "onClickOutside",
              action: {
                type: "ui-interaction",
                id: "action_uuid_1",
                name: undefined,
                params: undefined,
                postAction: undefined,
                // redirect options, only required when type is redirect.
                redirectOptions: undefined,
                // function to invoke, required when type is set to function
                functionName: "",
                // customJS options. only required when the action type is set to `custom-action`
                customJS: undefined,
                // rest request configuration. only required when the action type is set to rest-request.
                restConfig: undefined,
                // params object is required when the type is either: "function|rest-request|custom-action" and marked as required parameter in the function signature
                // expects a key-value pair
                params: undefined,
                // the below fields are required when the type is NOT 'custom-action' for this action. because `onSuccess` and `onFailure` are both defined in customJS object.
                onSuccess: {},
                onFailure: {},
                // optional field: confirmation. required only when this action needs confirmation. this can be a modal or any component that confirms user's action
                confirmation: undefined,
              },
            },
          ],
        },
      },
    },
    // context options like Add Tasks, Expand Record, Edit Record, Delete Record can be defined elsewhere and imported here for reusability. The params for which must be taken from the state of the active table-tab.
    // ...defaultContextOptions,
  ],
}

// action_uuid_1 refers to this following action
/**
 action: close active modal
*/

// action_uuid_2 refers to this following action
/**
 action: invoke function updateStatus({status:"inactive"})
*/

const view = {
viewId:"",
viewName:"",
viewDescription: "",
icon: "",
version: "",
policy: {
  "Positions": table.fields.sumbissions.displayName
}
}

{
  table: {
    name: "users"
    id: "some-uuid",
    // views: [],
    // constraints: {
    //   fields: [
    //     // based on the field type, we must have different options to further restrict them.
    //     // for example, if the field type is Number (Int), we should be able to apply restrictions like only allow if field is < || = to the number or if the number is in between these numbers.
    //     // one more example, if the field type is multi select, and we're restricting what the user can update the field with or insert into the field, we must be able to add conditions like only show them the multi select options 3,4 when actually there are 1,2,3,4 options.
    //     {
    //       name: "email",
    //       operation: "read",
    //       allow: true,
    //       // if limits is not defined this field will be allowed to be read by everyone no matter what
    //       // but if limits is defined, this field will be allowed to be read only when the following conditions are evaluated and met.
    //       limits: {
    //         conditions: {
    //           custom: "custom js expression",
    //           array: [
    //             [
    //               {
    //                 name: 'allow_when_email_contains_domain_name',
    //                 description: 'this condition will only allow users that have a certain domain name in their emails perform read on the email field of users table',
    //                 expression: modules.users.email.includes("some domain name"),
    //                 limits: {
    //                   requestsPerMinute: 200,
    //                   blah_blah: 'blah_blah'
    //                 }
    //               },
    //               // AND operator
    //               {
    //                 name: 'allow_when_email_contains_domain_name',
    //                 description: 'this condition will only allow users that have a certain domain name in their emails perform read on the email field of users table',
    //                 expression: modules.users.email.includes("some domain name"),
    //                 limits: {
    //                   requestsPerMinute: 200,
    //                   blah_blah: 'blah_blah'
    //                 }
    //               },
    //             ],
    //             // OR operator
    //           [
                
    //           ]]
    //         }
    //       }
    //     },
    //     // similarly other fields
    //   ],
    //   // the records are only allowed after the fields are filtered
    //   records: [
    //     {
    //       name: "email",
    //       operation: "read",
    //       allow: true,
    //       // if limits is not defined this field will be allowed to be read by everyone no matter what
    //       // but if limits is defined, this field will be allowed to be read only when the following conditions are evaluated and met.
    //       limits: {
    //         conditions: {
    //           custom: "custom js expression",
    //           array: [
    //             [
    //               {
    //                 name: 'allow_when_email_contains_domain_name',
    //                 description: 'this condition will only allow users that have a certain domain name in their emails perform read on the email field of users table',
    //                 expression: modules.users.email.includes("some domain name"),
    //                 limits: {
    //                   requestsPerMinute: 200,
    //                   blah_blah: 'blah_blah'
    //                 }
    //               },
    //               // AND operator
    //               {
    //                 name: 'allow_when_email_contains_domain_name',
    //                 description: 'this condition will only allow users that have a certain domain name in their emails perform read on the email field of users table',
    //                 expression: modules.users.email.includes("some domain name"),
    //                 limits: {
    //                   requestsPerMinute: 200,
    //                   blah_blah: 'blah_blah'
    //                 }
    //               },
    //             ],
    //             // OR operator
    //           [
    //           ]
    //           ]
    //         }
    //       }
    //     }
    //   ]
    // },
    // ... additional constraints
  }
  // ... additional configurations and controls
}