import { TutorialHeaderProps } from "@site/src/components/TutorialHeader";

export interface ScriptHeadersType {
  [key: string]: TutorialHeaderProps;
}

export const ScriptHeaders: ScriptHeadersType = {
  basic: {
    time: "5 - 7 min",
    topics: [
      { label: "Script", href: "/docs/concepts/glossary#script" },
      {
        label: "CKB-VM",
        href: "/docs/concepts/glossary#ckb-vm",
      },
      { label: "Cell Model", href: "/docs/concepts/cell-model" },
      { label: "Transaction", href: "/docs/concepts/glossary#transaction" },
    ],
    tools: [
      <div>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git</a>,
        <a href="https://www.tutorialspoint.com/unix_commands/make.htm" target="_blank" rel="noopener noreferrer">make</a>,
        <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">bash</a>,
        <a href="https://linux.die.net/man/1/sha256sum" target="_blank" rel="noopener noreferrer">sha256sum</a> 
        {" and others Unix utilities."}</div>,
      <div>
        <a href={"https://www.rust-lang.org/"}>Rust</a>
        {" and riscv64 target: "} <code>rustup target add riscv64imac-unknown-none-elf</code>
      </div>,
      <div>
        <a href={"https://releases.llvm.org/16.0.0/tools/clang/docs/ReleaseNotes.html"}>Clang 16+</a>
      </div>,
      <div>
        <a href="https://github.com/cargo-generate/cargo-generate">cargo-generate</a>
      </div>,
    ],
  },
};

export default ScriptHeaders;