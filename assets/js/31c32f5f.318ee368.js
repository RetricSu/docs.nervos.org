"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[756],{8254:(e,n,t)=>{t.d(n,{Ay:()=>a});var s=t(4848),o=t(8453);function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"So now your app works great on the local blockchain, you might want to switch it to different environments like Testnet and mainnet."}),"\n",(0,s.jsx)(n.p,{children:"To do this, you need to update the chain config and related code."}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"ckb.ts"})," in your project root dir, change the ",(0,s.jsx)(n.code,{children:"lumosConfig"})," and ",(0,s.jsx)(n.code,{children:"CKB_RPC_URL"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"//export const lumosConfig: config.Config = devConfig as config.Config;\nexport const lumosConfig = config.predefined.AGGRON4 as config.Config;\n\n//export const CKB_RPC_URL = 'http://localhost:8114';\nexport const CKB_RPC_URL = \"https://testnet.ckb.dev/rpc\";\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Acutally, we have the corresponding Testnet version examples for all these tutorials. The source code of the Testnet version is in ",(0,s.jsx)(n.a,{href:"https://github.com/nervosnetwork/docs.nervos.org/tree/develop-v2/examples",children:"https://github.com/nervosnetwork/docs.nervos.org/tree/develop-v2/examples"}),", you can clone the repo and start running on Testnet."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/nervosnetwork/docs.nervos.org.git\ncd docs.nervos.org.git/examples/<example-name>\nyarn && yarn start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more details, check out the ",(0,s.jsx)(n.a,{href:"https://github.com/nervosnetwork/docs.nervos.org/blob/develop-v2/examples/simple-transfer/README.md",children:"README.md"}),";"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},6182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var s=t(4848),o=t(8453),r=t(9496),a=t(5683),c=t(8254);const l={id:"issue-token",title:"Issue Token",sidebar_position:4},i="Issue Custom Token",u={id:"dapps/issue-token",title:"Issue Token",description:"<TutorialHeader",source:"@site/docs/dapps/issue-token.mdx",sourceDirName:"dapps",slug:"/dapps/issue-token",permalink:"/docs/dapps/issue-token",draft:!1,unlisted:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop-v2/website/docs/dapps/issue-token.mdx",tags:[],version:"current",lastUpdatedAt:1712118446,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:4,frontMatter:{id:"issue-token",title:"Issue Token",sidebar_position:4},sidebar:"tutorial",previous:{title:"Write Message",permalink:"/docs/dapps/write-message"},next:{title:"Create a DOB",permalink:"/docs/dapps/create-dob"}},d={},h=[{value:"Custom Token on CKB",id:"custom-token-on-ckb",level:2},{value:"Setup Devnet &amp; Run Example",id:"setup-devnet--run-example",level:2},{value:"Behind the Scene",id:"behind-the-scene",level:2},{value:"Issuing Custom Token",id:"issuing-custom-token",level:3},{value:"Token Info &amp; Holders",id:"token-info--holders",level:3},{value:"Transfer Custom Token",id:"transfer-custom-token",level:3},{value:"Congratulations!",id:"congratulations",level:2},{value:"Next Step",id:"next-step",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"issue-custom-token",children:"Issue Custom Token"}),"\n",(0,s.jsx)(r.A,{estimateTime:"2 \u2013 5 min",whatYouWillLearn:["How Custom Token Works On CKB","Issuing Your Own Token","View And Check Your Token Info & holders","Transfer Custom Token"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-token-on-ckb",children:"Custom Token on CKB"}),"\n",(0,s.jsx)(n.p,{children:"Different from ERC20(Ethereum) and BRC20(Bitcoin), CKB uses a unique way to build custom tokens based on the UTXO-like Cell model."}),"\n",(0,s.jsxs)(n.p,{children:["In CKB, custom tokens are called User-Defined-Token, aka UDT. The core team of CKB has proposed a minimal standard for UDT called xUDT(extensible UDT). In this tutorial, we will use the pre-deployed smart contracts ",(0,s.jsx)(n.code,{children:"xUDT script"})," to issue custom tokens."]}),"\n",(0,s.jsx)(n.p,{children:"The high-level workflow to issue a custom token with xUDT goes like this:"}),"\n",(0,s.jsx)(n.p,{children:"When you issue a token, you create a special cell that presents some balance of your token, like a piece of printed cash to the dollars."}),"\n",(0,s.jsx)(n.p,{children:"For this special cell, its data field contains the amount of the token and its type script is xUDT script where the args of that script will be the issuer's lock script hash."}),"\n",(0,s.jsx)(n.p,{children:"This issuer's lock script hash works like the unique ID for the custom token. Different lock script hash means a different kind of token. It is also used as a checkpoint to tell that a transaction is triggered by the token issuer or a regular token holder to apply different security validation."}),"\n",(0,s.jsxs)(n.p,{children:["In reality, xUDT is more complicated and powerful with many features but the idea is the same, you can check the ",(0,s.jsx)(n.a,{href:"https://github.com/XuJiandong/rfcs/blob/xudt/rfcs/0052-extensible-udt/0052-extensible-udt.md",children:"full specs here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"setup-devnet--run-example",children:"Setup Devnet & Run Example"}),"\n",(0,s.jsx)(a.A,{templateName:"issue-custom-token",imageSrc:"img/dapps/issue-token-dapp.jpg"}),"\n",(0,s.jsx)(n.h2,{id:"behind-the-scene",children:"Behind the Scene"}),"\n",(0,s.jsx)(n.h3,{id:"issuing-custom-token",children:"Issuing Custom Token"}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"lib.ts"})," file in your project and check out the ",(0,s.jsx)(n.code,{children:"IssueToken"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export async function issueToken(privKey: string, amount: string) {\n  const xudtDeps = lumosConfig.SCRIPTS.XUDT;\n\n  const { lockScript } = generateAccountFromPrivateKey(privKey);\n  const xudtArgs = utils.computeScriptHash(lockScript) + '00000000';\n\n  const typeScript = {\n    codeHash: xudtDeps.CODE_HASH,\n    hashType: xudtDeps.HASH_TYPE,\n    args: xudtArgs,\n  };\n  ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This function accepts two parameters, one private key of the issuer and the amount of token. Notice that we are trying to create an output cell whose type script is an xUDT script, and the args of this xUDT script is the issuer's lock script hash, that's why we have the following lines of code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const { lockScript } = generateAccountFromPrivateKey(privKey);\nconst xudtArgs = utils.computeScriptHash(lockScript) + "00000000";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Also notice the ",(0,s.jsx)(n.code,{children:"00000000"})," here is just a placeholder, to unleash more power of the xUDT script, this placeholder can contain some specific data, but now we don't need to worry about this part."]}),"\n",(0,s.jsx)(n.p,{children:"Further down the function, you can see that the full target output cell of our custom token looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const targetOutput: Cell = {\n  cellOutput: {\n    capacity: "0x0",\n    lock: lockScript,\n    type: typeScript,\n  },\n  data: bytes.hexify(number.Uint128LE.pack(amount)),\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notice that the ",(0,s.jsx)(n.code,{children:"data"})," field is the amount of the custom token."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, to complete our ",(0,s.jsx)(n.code,{children:"issueToken"})," function, we just use the ",(0,s.jsx)(n.code,{children:"helpers.TransactionSkeleton"})," to build the transaction with our desired output cells."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"let txSkeleton = helpers.TransactionSkeleton();\ntxSkeleton = addCellDep(txSkeleton, {\n  outPoint: {\n    txHash: lockDeps.TX_HASH,\n    index: lockDeps.INDEX,\n  },\n  depType: lockDeps.DEP_TYPE,\n});\n...\ntxSkeleton = txSkeleton.update('inputs', (inputs) => inputs.push(...collected));\n  txSkeleton = txSkeleton.update('outputs', (outputs) => outputs.push(targetOutput, changeOutput));\n\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, we do the signing and witness data part, just like what we mentioned in the previous tutorial in the ",(0,s.jsx)(n.code,{children:"transfer-balance"})," example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// prepare witness data\n/* 65-byte zeros in hex */\nconst lockWitness =\n  "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\nconst outputTypeWitness = xudtWitnessType.pack({ extension_data: [] });\nconst witnessArgs = blockchain.WitnessArgs.pack({\n  lock: lockWitness,\n  outputType: outputTypeWitness,\n});\nconst witness = bytes.hexify(witnessArgs);\ntxSkeleton = txSkeleton.update("witnesses", (witnesses) =>\n  witnesses.set(0, witness)\n);\n\n// signing\ntxSkeleton = commons.common.prepareSigningEntries(txSkeleton);\nconst message = txSkeleton.get("signingEntries").get(0)?.message;\nconst Sig = hd.key.signRecoverable(message!, privKey);\nconst tx = helpers.sealTransaction(txSkeleton, [Sig]);\n\n// submit transaction\nconst hash = await rpc.sendTransaction(tx, "passthrough");\nconsole.log("The transaction hash is", hash);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"token-info--holders",children:"Token Info & Holders"}),"\n",(0,s.jsxs)(n.p,{children:["Since we have issued a custom token, the next step will be checking out this token and viewing its holders. To do that, we write a ",(0,s.jsx)(n.code,{children:"queryIssuedTokenCells"})," in the ",(0,s.jsx)(n.code,{children:"lib.ts"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export async function queryIssuedTokenCells(xudtArgs: HexString) {\n  const xudtDeps = lumosConfig.SCRIPTS.XUDT;\n  const typeScript = {\n    codeHash: xudtDeps.CODE_HASH,\n    hashType: xudtDeps.HASH_TYPE,\n    args: xudtArgs,\n  };\n\n  const collected: Cell[] = [];\n  const collector = indexer.collector({ type: typeScript });\n  for await (const cell of collector.collect()) {\n    collected.push(cell);\n  }\n  return collected;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notice that to query a custom token cell, we have to know its xUDTArgs, as we explained in the high-level ideas for xUDT scripts, this xUDTArgs works like the unique ID for the token you issued."}),"\n",(0,s.jsxs)(n.p,{children:["So the ",(0,s.jsx)(n.code,{children:"queryIssuedTokenCells"})," will accept only one parameter: xudtArgs. We then build a type script with this xudtArgs and use ",(0,s.jsx)(n.code,{children:"indexer.collector({ type: typeScript });"})," to query the live cells that have such type script."]}),"\n",(0,s.jsx)(n.p,{children:"By finding out the lock scripts of these live cells, we can tell that those custom tokens now belong to the one who can unlock this lock script, therefore we know who are the token holders."}),"\n",(0,s.jsx)(n.h3,{id:"transfer-custom-token",children:"Transfer Custom Token"}),"\n",(0,s.jsx)(n.p,{children:"The next step you want to do is probably sending your tokens to someone else. To do that, you will replace the lock script of the custom token cell with the receiver's lock script. Therefore, the receiver can unlock the custom token cell. In this way, the token is transferred from you to other people."}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.code,{children:"transferTokenToAddress"})," function in ",(0,s.jsx)(n.code,{children:"lib.ts"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export async function transferTokenToAddress(\n  udtIssuerArgs: string,\n  senderPrivKey: string,\n  amount: string,\n  receiverAddress: string,\n){\n  ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The function use ",(0,s.jsx)(n.code,{children:"udtIssuerArgs"})," to build the type script from the custom token. It then collects live cells which match the type script and the lock script of the ",(0,s.jsx)(n.code,{children:"senderLockScript"}),', this is like saying "giving me the custom token cells that belong to the sender (sender can unlock the lock script)".']}),"\n",(0,s.jsx)(n.p,{children:"With all these live cells, we can build the transaction to produce custom token cells with the required amount and the receiver's lock scripts from the input cells."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'let txSkeleton = helpers.TransactionSkeleton();\ntxSkeleton = addCellDep(txSkeleton, {\n  outPoint: {\n    txHash: lockDeps.TX_HASH,\n    index: lockDeps.INDEX,\n  },\n  depType: lockDeps.DEP_TYPE,\n});\ntxSkeleton = addCellDep(txSkeleton, {\n  outPoint: {\n    txHash: xudtDeps.TX_HASH,\n    index: xudtDeps.INDEX,\n  },\n  depType: xudtDeps.DEP_TYPE,\n});\n\nconst targetOutput: Cell = {\n  cellOutput: {\n    capacity: "0x0",\n    lock: receiverLockScript,\n    type: typeScript,\n  },\n  data: bytes.hexify(number.Uint128LE.pack(amount)),\n};\n\nconst capacity = helpers.minimalCellCapacity(targetOutput);\ntargetOutput.cellOutput.capacity = "0x" + capacity.toString(16);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You may notice that the ",(0,s.jsx)(n.code,{children:"transferTokenToAddress"})," function is pretty long, while the core transfer logic is quite simple above. The problem is that we need to handle the capacity change in the ",(0,s.jsx)(n.code,{children:"changeOutputCell"})," and if the change capacity is less than 61CKB, we need to add another live cell in our inputs in order to build the ",(0,s.jsx)(n.code,{children:"changeOutputCell"}),". Also, we need to handle the token amount changes. If we get some token amount left, we need to return the change amount with change capacities to the sender."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'let changeOutputTokenAmount = BI.from(0);\nif (collectedAmount.gt(BI.from(amount))) {\n  changeOutputTokenAmount = collectedAmount.sub(BI.from(amount));\n}\n\nconst changeOutput: Cell = {\n  cellOutput: {\n    capacity: "0x0",\n    lock: senderLockScript,\n    type: typeScript,\n  },\n  data: bytes.hexify(\n    number.Uint128LE.pack(changeOutputTokenAmount.toString(10))\n  ),\n};\n\nconst changeOutputNeededCapacity = BI.from(\n  helpers.minimalCellCapacity(changeOutput)\n);\n\nconst extraNeededCapacity = collectedSum.lt(neededCapacity)\n  ? neededCapacity.sub(collectedSum).add(changeOutputNeededCapacity)\n  : collectedSum.sub(neededCapacity).add(changeOutputNeededCapacity);\n\nif (extraNeededCapacity.gt(0)) {\n  let extraCollectedSum = BI.from(0);\n  const extraCollectedCells: Cell[] = [];\n  const collector = indexer.collector({\n    lock: senderLockScript,\n    type: "empty",\n  });\n  for await (const cell of collector.collect()) {\n    extraCollectedSum = extraCollectedSum.add(cell.cellOutput.capacity);\n    extraCollectedCells.push(cell);\n    if (extraCollectedSum >= extraNeededCapacity) break;\n  }\n\n  if (extraCollectedSum.lt(extraNeededCapacity)) {\n    throw new Error(\n      `Not enough CKB for change, ${extraCollectedSum} < ${extraNeededCapacity}`\n    );\n  }\n\n  txSkeleton = txSkeleton.update("inputs", (inputs) =>\n    inputs.push(...extraCollectedCells)\n  );\n\n  const change2Capacity = extraCollectedSum.sub(changeOutputNeededCapacity);\n  if (change2Capacity.gt(61000000000)) {\n    changeOutput.cellOutput.capacity = changeOutputNeededCapacity.toHexString();\n    const changeOutput2: Cell = {\n      cellOutput: {\n        capacity: change2Capacity.toHexString(),\n        lock: senderLockScript,\n      },\n      data: "0x",\n    };\n    txSkeleton = txSkeleton.update("outputs", (outputs) =>\n      outputs.push(changeOutput2)\n    );\n  } else {\n    changeOutput.cellOutput.capacity = extraCollectedSum.toHexString();\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["All the extra logic here can be a little confusing at first time. However, the overall high-level process is quite simple and straightforward. We are also looking forward to some tools like ",(0,s.jsx)(n.code,{children:"Lumos"})," to automatically cover such works in the future."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"congratulations",children:"Congratulations!"}),"\n",(0,s.jsx)(n.p,{children:"By following this tutorial this far, you have mastered how custom tokens work on CKB. Here's a quick recap:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a CKB transaction containing a xUDT Cell in the outputs"}),"\n",(0,s.jsx)(n.li,{children:"The data of the xUDT cell contains the amount number of the token"}),"\n",(0,s.jsx)(n.li,{children:"Query the custom token cell by passing the lock script hash of the token issuer"}),"\n",(0,s.jsx)(n.li,{children:"Transfer tokens to another account by replacing the lock script."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["xUDT specs: ",(0,s.jsx)(n.a,{href:"https://github.com/XuJiandong/rfcs/blob/xudt/rfcs/0052-extensible-udt/0052-extensible-udt.md",children:"RFC-0052-extensible-udt"})]}),"\n",(0,s.jsxs)(n.li,{children:["sUDT specs: ",(0,s.jsx)(n.a,{href:"https://github.com/nervosnetwork/rfcs/blob/xudt/rfcs/0025-simple-udt/0025-simple-udt.md",children:"RFC-0025-simple-udt"})]}),"\n",(0,s.jsxs)(n.li,{children:["CKB transaction structure: ",(0,s.jsx)(n.a,{href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md",children:"RFC-0022-transaction-structure"})]}),"\n",(0,s.jsxs)(n.li,{children:["CKB data structure basics: ",(0,s.jsx)(n.a,{href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md",children:"RFC-0019-data-structure"}),"\n./SetupProject.js\n./SetupProject.js\n./SetupProject.js"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5683:(e,n,t)=>{t.d(n,{A:()=>d});var s=t(6540),o=t(4848),r=t(8453),a=t(1470),c=t(9365),l=t(6025);function i(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To begin, you'll need to install ",(0,o.jsx)(n.code,{children:"@offckb/cli"})," to establish a local dev environment and initialize the project."]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(c.A,{value:"offckb-install",label:"Command",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install -g @offckb/cli\n"})})}),(0,o.jsx)(c.A,{value:"offckb-install-result",label:"Response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"changed 106 packages in 17s\n\n11 packages are looking for funding\nrun `npm fund` for details\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"offckb"})," to select the ",(0,o.jsx)("code",{children:e.templateName})," template to init the project to your local environment"]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(c.A,{value:"offckb-init",label:"Command",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"offckb init <project-name>\n"})})}),(0,o.jsx)(c.A,{value:"offckb-init-result",label:"Response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"? Select a dapp template (Use arrow keys)\n  View and Transfer Balance\n  Issue Token via xUDT scripts\n\u276f Write and Read On-Chain Message\na simple dapp to write and read text message from blockchain via storing it in cells\ninit CKB dapp project: /Users/ckb/Desktop/offckb/<project-name>\n\u2728  Done in 2.52s.\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Install node dependencies and start the example app:"}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(c.A,{value:"offckb-yarn-start",label:"Command",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd <project-name> && yarn && yarn start\n"})})}),(0,o.jsx)(c.A,{value:"offckb-yarn-start-result",label:"Response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ parcel index.html\nServer running at http://localhost:1234\n\u2728 Built in 66ms\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Now, the app is running in ",(0,o.jsx)(n.a,{href:"http://localhost:1234",children:"http://localhost:1234"})]}),"\n",(0,o.jsx)("img",{src:(0,l.A)(e.imageSrc)}),"\n",(0,o.jsx)(n.h3,{id:"start-the-devnet",children:"Start the Devnet"}),"\n",(0,o.jsx)(n.p,{children:"In order to interact with the app, you need to start the devnet and check some accounts to use."}),"\n",(0,o.jsx)(n.p,{children:"Open one terminal and start the devnet:"}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(c.A,{value:"offckb-node",label:"Command",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"offckb node\n"})})}),(0,o.jsx)(c.A,{value:"offckb-node-result",label:"Response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"/bin/sh: /Users/nervosDocs/.nvm/versions/node/v18.12.1/lib/node_modules/@offckb/cli/target/ckb/ckb: No such file or directory\n/Users/nervosDocs/.nvm/versions/node/v18.12.1/lib/node_modules/@offckb/cli/target/ckb/ckb not found, download and install the new version 0.113.1..\nCKB installed successfully.\ninit devnet config folder: /Users/nervosDocs/.nvm/versions/node/v18.12.1/lib/node_modules/@offckb/cli/target/devnet\nmodified  /Users/nervosDocs/.nvm/versions/node/v18.12.1/lib/node_modules/@offckb/cli/target/devnet/ckb-miner.toml\nCKB output: 2024-03-20 07:56:44.765 +00:00 main INFO sentry  sentry is disabled\n\nCKB output: 2024-03-20 07:56:44.766 +00:00 main INFO ckb_bin::helper  raise_fd_limit newly-increased limit: 61440\n\nCKB output: 2024-03-20 07:56:44.854 +00:00 main INFO ckb_bin::subcommand::run  ckb version: 0.113.1 (95ad24b 2024-01-31)\n\nCKB output: 2024-03-20 07:56:45.320 +00:00 main INFO ckb_db_migration  Init database version 20230206163640\n\nCKB output: 2024-03-20 07:56:45.329 +00:00 main INFO ckb_launcher  Touch chain spec hash: Byte32(0x3036c73473a371f3aa61c588c38924a93fb8513e481fa7c8d884fc4cf5fd368a)\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Open another terminal and check some pre-funded accounts, copy some private keys for later usage:"}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(c.A,{value:"offckb-accounts",label:"Command",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"offckb accounts\n"})})}),(0,o.jsx)(c.A,{value:"offckb-accounts-result",label:"Response",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Print account list, each account is funded with 42_000_000_00000000 capacity in the genesis block.\n[\n  {\n    privkey: '0x6109170b275a09ad54877b82f7d9930f88cab5717d484fb4741ae9d1dd078cd6',\n    pubkey: '0x02025fa7b61b2365aa459807b84df065f1949d58c0ae590ff22dd2595157bffefa',\n    lockScript: {\n      codeHash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hashType: 'type',\n      args: '0x8e42b1999f265a0078503c4acec4d5e134534297'\n    },\n    address: 'ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqvwg2cen8extgq8s5puft8vf40px3f599cytcyd8',\n    args: '0x8e42b1999f265a0078503c4acec4d5e134534297'\n  },\n  {\n    privkey: '0x9f315d5a9618a39fdc487c7a67a8581d40b045bd7a42d83648ca80ef3b2cb4a1',\n    pubkey: '0x026efa0579f09cc7c1129b78544f70098c90b2ab155c10746316f945829c034a2d',\n    lockScript: {\n      codeHash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hashType: 'type',\n      args: '0x758d311c8483e0602dfad7b69d9053e3f917457d'\n    },\n    address: 'ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqt435c3epyrupszm7khk6weq5lrlyt52lg48ucew',\n    args: '0x758d311c8483e0602dfad7b69d9053e3f917457d'\n  },\n  #... \n]\n"})})})]}),"\n",(0,o.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}const d=function(e){return(0,s.createElement)(u,e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var s=t(8215);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),o=t(8215),r=t(3104),a=t(6347),c=t(205),l=t(7485),i=t(1682),u=t(9466);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,r=(0,a.W6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:o});return[(0,l.aZ)(c),(0,s.useCallback)((function(e){if(c){var n=new URLSearchParams(r.location.search);n.set(c,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[c,r])]}function x(e){var n,t,o,r,a=e.defaultValue,l=e.queryString,i=void 0!==l&&l,d=e.groupId,x=h(e),m=(0,s.useState)((function(){return function(e){var n,t=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:x})})),g=m[0],k=m[1],b=f({queryString:i,groupId:d}),v=b[0],j=b[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),o=t[0],r=t[1],[o,(0,s.useCallback)((function(e){n&&r.set(e)}),[n,r])]),w=y[0],C=y[1],T=function(){var e=null!=v?v:w;return p({value:e,tabValues:x})?e:null}();return(0,c.A)((function(){T&&k(T)}),[T]),{selectedValue:g,selectValue:(0,s.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);k(e),j(e),C(e)}),[j,C,x]),tabValues:x}}var m=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(4848);function b(e){var n=e.className,t=e.block,s=e.selectedValue,a=e.selectValue,c=e.tabValues,l=[],i=(0,r.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),o=c[t].value;o!==s&&(i(n),a(o))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var s,o=l.indexOf(e.currentTarget)+1;t=null!=(s=l[o])?s:l[0];break;case"ArrowLeft":var r,a=l.indexOf(e.currentTarget)-1;t=null!=(r=l[a])?r:l[l.length-1]}null==(n=t)||n.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,k.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},r,{className:(0,o.A)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,o=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=r.find((function(e){return e.props.value===o}));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function j(e){var n=x(e);return(0,k.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,k.jsx)(b,Object.assign({},e,n)),(0,k.jsx)(v,Object.assign({},e,n))]})}function y(e){var n=(0,m.A)();return(0,k.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},9496:(e,n,t)=>{t.d(n,{A:()=>a});const s={box:"box_OmWe",bold:"bold_xF78",estimateTime:"estimateTime_dfR_"};var o=t(53),r=t(4848);function a(e){var n=e.estimateTime,t=e.whatYouWillLearn;return(0,r.jsxs)("div",{className:s.box,children:[(0,r.jsxs)("div",{className:(0,o.A)(s.estimateTime,s.bold),children:["Estimated time: ",n]}),(0,r.jsx)("div",{className:s.bold,children:"What you\u2019ll learn:"}),(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})}},53:(e,n,t)=>{function s(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=s(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=s(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{A:()=>o})},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);