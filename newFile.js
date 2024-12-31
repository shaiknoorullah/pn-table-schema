const { moduleSchema, undefined } = require("./somefunction");

moduleSchema.extend({
  contextOptions: [
    {
      name: "Mark as inactive",
      component: {
        name: "ContextMenuOption",
        disableInteractions: false,
        children: [
          {
            childType: "component", // component | plain_text

            // based on the above property value (component||plain_text) different properties are available to configure.
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
                                       */
              ],
            },
            plain_text: undefined,
          },
          {
            childType: "plain_text", // component | plain_text

            // based on the above property value (component||plain_text) different properties are available to configure.
            component: undefined,
            plain_text: "Mark as inactive",
          },
        ],
        layoutStyle: {
          layout: "flex",
          direction: "column",
          customStyle: "gap-10, p-2, pt-1",
        },
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
        // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
        props: {
          // [propName]: value,
        },
        styleOverrides: {
          strategy: "union|substract|replace",
          styles: "bg-red-500",
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
      },
      icon: "https://someIconLink",
      trigger: "onClick", // predefined trigger options to select from
      hasSubMenu: false,
      // property action is required if `hasSubMenu` is set to false
      action: {
        type: "redirect|function|rest-request|ui-interaction|custom-action",
        // optionally provide an instance specific name for better observability and debugging
        name: "",
        // property `id` is required when type is either of "function|custom-action", optionally required when type is "rest-request",
        // optionally required when type is ui-interaction but does not require any further interactions by user basically static ui changes.
        // NOTE: do not provide the id property if this action is a non-generic specialized function. we advise not to define these types of specialized functions earlier.
        id: "",
        // params object is required when the type is either: "function|rest-request|custom-action" and marked as required param in the funct
        params: {},
        // postAction is also action, the only difference is that postAction is invoked after successful completion of the currently running action.
        postAction: {
          id: "invalidate_table_data",
          name: "invalidate_org_table_data",
          // you can even add a chain of actions by nesting postActions further. though there is a limit to 10 chains.
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
        },
        // optional field: confirmation. required only when this action needs confirmation
        confirmation: {
          required: true,
          //   message to show in the modal
          message:
            "You are about to mark this client as inactive. Once marked as inactive, this client will be moved to the 'Inactive Clients' section. Do you want to proceed?",
          // you can also make this dynamic by passing variables to the string `${variableName}`
          /**
           * message: `You are about to mark this client as ${status!=='inactive'?'inactive':'active'}. Once marked as ${status!=='inactive'?'inactive':'active'}, this client will be moved to the '${status!=='inactive'?[...getTableSchema(tableId).getDefaultFilters()].filter({fieldName:"status",value:"inactive"})[0].name.toString():'active'}' section. Do you want to proceed?`
           */
          interactions: [
            // cancel button
            {
              name: "Cancel", // either name or icon or both must be defined
              icon: "https://some-another-iconlink.com",
              buttonFlow: "row|reverseflow", // defines if icon must come before the text or icon enabled and required only when name & icon are defined. Default: row
              trigger: "onClick",
              action: {
                id: "action_uuid_1",
                params: undefined,
                postAction: undefined,
              },
              component: {
                name: "componentName",
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
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "bg-red-500",
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
              },
              customStyles: "", // optional
            },
            // the cross button on the confirmation modal
            {
              name: undefined, // either name or icon or both must be defined
              icon: "https://some-another-iconlink.com",
              buttonFlow: undefined, // defines if icon must come before the text or icon enabled and required only when name & icon are defined. Default: row
              trigger: "onClick",
              action: {
                id: "action_uuid_1",
                params: undefined,
                postAction: undefined,
              },
              component: {
                name: "PnUIButton",
                disableInteractions: false,
                variant: [
                  {
                    name: "base", // name of the variant to use
                    size: "sm", // size variant to use
                    styleOverrides: {
                      strategy: undefined, // "union|substract|replace"
                      styles: undefined, // tailwind aware string
                    },
                  },
                ],
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "font-bold",
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
              },
              customStyles: "", // optional
            },
            // confirm button
            {
              name: "Confirm", // either name or icon or both must be defined
              disableInteractions: false,
              icon: undefined,
              buttonFlow: undefined, // defines if icon must come before the text or icon enabled and required only when name & icon are defined. Default: row
              trigger: "onClick",
              action: {
                id: "action_uuid_2",
                params: { status: "inactive" },
                postAction: {
                  id: "invalidate_table_data",
                },
              },
              component: {
                name: "button",
                variant: [
                  {
                    name: "danger", // name of the variant to use
                    size: "md", // size variant to use
                    styleOverrides: undefined,
                  },
                ],
                // suggestion: if we could somehow import the signatures of the components, the props can then have suggestions.
                props: {
                  // [propName]: value,
                },
                styleOverrides: {
                  strategy: "union|substract|replace",
                  styles: "bg-red-500",
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
              },
              customStyles: "", // optional
            },
          ],
          attachListeners: [
            {
              name: "onClickOutside",
              action: {
                id: "action_uuid_1",
                params: { status: "inactive" },
                postAction: {
                  id: "invalidate_table_data",
                },
              },
            },
          ],
        },
      },
    },
    // context options like Add Tasks, Expand Record, Edit Record, Delete Record can be defined elsewhere and imported here for reusability. The params for which must be taken from the state of the active table-tab.
    ...defaultContextOptions,
  ],
});
