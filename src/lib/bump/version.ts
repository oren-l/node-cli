export type VersionPart = "major" | "minor" | "build";

export class Version {
  public major: number;
  public minor: number;
  public build: number;

  constructor(str: string) {
    const parts = str.split(".").map((strPart) => parseInt(strPart, 10));
    this.major = parts[0];
    this.minor = parts[1];
    this.build = parts[2];
  }

  public toString(): string {
    return [this.major, this.minor, this.build].join(".");
  }

  public clone(): Version {
    return new Version(this.toString());
  }

  public bump(part: VersionPart): Version {
    const clone = this.clone();
    if (part === "major") {
      clone.major += 1;
      return clone;
    }
    if (part === "minor") {
      clone.minor += 1;
      return clone;
    }
    // part === build
    clone.build += 1;
    return clone;
  }
}
