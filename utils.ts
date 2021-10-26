import {
  PublicKey,
  TransactionInstruction,
  SystemProgram,
  SYSVAR_RENT_PUBKEY
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export function createMetadataInstruction(
  metadataAccount: PublicKey,
  mint: PublicKey,
  mintAuthority: PublicKey,
  payer: PublicKey,
  updateAuthority: PublicKey,
  data: Buffer
): TransactionInstruction {
  const keys = [
    {
      pubkey: metadataAccount,
      isSigner: false,
      isWritable: true
    },
    {
      pubkey: mint,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: mintAuthority,
      isSigner: true,
      isWritable: false
    },
    {
      pubkey: payer,
      isSigner: true,
      isWritable: false
    },
    {
      pubkey: updateAuthority,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false
    }
  ];
  const tx = new TransactionInstruction({
    keys,
    programId: TOKEN_METADATA_PROGRAM_ID,
    data: data
  });
  return tx;
}

export function createMasterEditionInstruction(
  metadataAccount: PublicKey,
  editionAccount: PublicKey,
  mint: PublicKey,
  mintAuthority: PublicKey,
  payer: PublicKey,
  updateAuthority: PublicKey,
  data: Buffer
) {
  const keys = [
    {
      pubkey: editionAccount,
      isSigner: false,
      isWritable: true
    },
    {
      pubkey: mint,
      isSigner: false,
      isWritable: true
    },
    {
      pubkey: updateAuthority,
      isSigner: true,
      isWritable: false
    },
    {
      pubkey: mintAuthority,
      isSigner: true,
      isWritable: false
    },
    {
      pubkey: payer,
      isSigner: true,
      isWritable: false
    },
    {
      pubkey: metadataAccount,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false
    }
  ];
  const tx = new TransactionInstruction({
    keys,
    programId: TOKEN_METADATA_PROGRAM_ID,
    data: data
  });
  return tx;
}
