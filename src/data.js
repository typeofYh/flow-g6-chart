export default {
  msg: "操作成功",
  code: 200,
  data: {
    id: 1,
    affiliationCategory: "1",
    sort: 1,
    stageName: "提交",
    nodeRole: "督办管理员",
    accessory: "0",
    parentId: 0,
    parentId2: 0,
    status: "1",
    delFlag: "0",
    isActivity: "2",
    flowChartList: [
      {
        id: 2,
        affiliationCategory: "1",
        sort: 2,
        stageName: "起草审批",
        nodeRole: "综合部副主任",
        accessory: "0",
        parentId: 1,
        parentId2: 1,
        status: "1",
        delFlag: "0",
        isActivity: "0",
        flowChartList: [
          {
            id: 3,
            affiliationCategory: "1",
            sort: 3,
            stageName: "起草审批",
            nodeRole: "综合部主任",
            accessory: "0",
            parentId: 2,
            parentId2: 2,
            status: "0",
            delFlag: "0",
            isActivity: "0",
            flowChartList: [
              {
                id: 4,
                affiliationCategory: "1",
                sort: 4,
                stageName: "起草审批",
                nodeRole: "分管领导",
                accessory: "1",
                parentId: 3,
                parentId2: null,
                status: "0",
                delFlag: "0",
                isActivity: "1",
                flowChartList: [
                  {
                    id: 5,
                    affiliationCategory: "1",
                    sort: 5,
                    stageName: "督办执行",
                    nodeRole: "部门经理",
                    accessory: "0",
                    parentId: 4,
                    parentId2: 3,
                    status: "0",
                    delFlag: "0",
                    isActivity: "2",
                    flowChartList: [
                      {
                        id: 6,
                        affiliationCategory: "1",
                        sort: 6,
                        stageName: "办结审批",
                        nodeRole: "分管领导",
                        accessory: "0",
                        parentId: 5,
                        parentId2: 5,
                        status: "0",
                        delFlag: "0",
                        isActivity: "2",
                        flowChartList: [
                          {
                            id: 7,
                            affiliationCategory: "1",
                            sort: 7,
                            stageName: "即时评价",
                            nodeRole: "分管领导",
                            accessory: "0",
                            parentId: 6,
                            parentId2: 6,
                            status: "0",
                            delFlag: "0",
                            isActivity: "2",
                            flowChartList: [
                              {
                                id: 8,
                                affiliationCategory: "1",
                                sort: 8,
                                stageName: "长效评价",
                                nodeRole: "分管领导",
                                accessory: "0",
                                parentId: 7,
                                parentId2: 7,
                                status: "0",
                                delFlag: "0",
                                isActivity: "2",
                                flowChartList: [
                                  {
                                    id: 9,
                                    affiliationCategory: "1",
                                    sort: 9,
                                    stageName: "抽检评价",
                                    nodeRole: "督办管理员",
                                    accessory: "0",
                                    parentId: 8,
                                    parentId2: 8,
                                    status: "0",
                                    delFlag: "0",
                                    isActivity: "2",
                                    flowChartList: null
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: 10,
                            affiliationCategory: "1",
                            sort: 7,
                            stageName: "即时评价",
                            nodeRole: "受益部门经理",
                            accessory: "0",
                            parentId: 6,
                            parentId2: 6,
                            status: "0",
                            delFlag: "0",
                            isActivity: "2",
                            flowChartList: [
                              {
                                id: 11,
                                affiliationCategory: "1",
                                sort: 8,
                                stageName: "长效评价",
                                nodeRole: "受益部门经理",
                                accessory: "0",
                                parentId: 10,
                                parentId2: 10,
                                status: "0",
                                delFlag: "0",
                                isActivity: "2",
                                flowChartList: [
                                  {
                                    id: 12,
                                    affiliationCategory: "1",
                                    sort: 9,
                                    stageName: "抽检评价",
                                    nodeRole: "督办管理员",
                                    accessory: "0",
                                    parentId: 11,
                                    parentId2: 11,
                                    status: "0",
                                    delFlag: "0",
                                    isActivity: "2",
                                    flowChartList: null
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
